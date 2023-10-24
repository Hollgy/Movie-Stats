import './App.css'
import MoviesByMonth from './components/MoviesByMonth'
import MoviesByRuntime from './components/MoviesByRuntime'
import MoviesByGenre from './components/MoviesByGenre'
import MoviesBySearch from './components/Search'
import MoviesByLanguage from './components/MoviesByLanguage'
import 'remixicon/fonts/remixicon.css'
import { useState, useEffect } from 'react'
import { delay, motion, spring } from "framer-motion"

function App() {
  const [activeComponent, setActiveComponent] = useState('search')
  const [splashScreenVisible, setSplashScreenVisible] = useState(true)



  const renderComponent = () => {
    switch (activeComponent) {
      case 'language':
        return <MoviesByLanguage />
      case 'genre':
        return <MoviesByGenre />
      case 'month':
        return <MoviesByMonth />
      case 'runtime':
        return <MoviesByRuntime />
      case 'search':
      default:
        return <MoviesBySearch />
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisible(false);
    }, 2000);
  }, []);

  window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
      splashScreen.style.opacity = '0';
      setTimeout(() => {
        splashScreen.style.display = 'none';
      }, 500); // fade 
    }, 1100); //väntetid
  });

  return (
    <>
      <main>
        {splashScreenVisible && ( // Render splash screen conditionally
          <motion.div className="splash-screen" id="splash-screen"
            initial={{ opacity: 1, y: 50, width: '100vw', height: '100%', position: 'fixed' }}
            animate={{ opacity: 0, y: '-100vh', width: '100vw', height: '100%', position: 'fixed' }}
            transition={{ duration: 2, delay: 1 }}
          >
            <motion.div className="splash-content"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              <motion.h1
                initial={{scale: 1,}}
                animate={{scale: 0.5}}

              >
                MovieStats
              </motion.h1>
            </motion.div>
          </motion.div>
        )}
        <header>
          <motion.h1
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.3, duration: 1.3, type: 'spring' }}
          >
            Movie Stats
          </motion.h1>
        </header>
        <div className="component-buttons">
          <button title='Search' onClick={() => setActiveComponent('search')}><i className="ri-search-line"></i></button>
          <button title='Language' onClick={() => setActiveComponent('language')}><i className="ri-translate-2"></i>
          </button>
          <button title='Genre' onClick={() => setActiveComponent('genre')}><i className="ri-movie-2-line"></i></button>
          <button title='Premiere' onClick={() => setActiveComponent('month')}><i className="ri-calendar-2-line"></i></button>
          <button title='Runtime' onClick={() => setActiveComponent('runtime')}><i className="ri-time-line"></i></button>
        </div>
        <motion.section
          className='render-section'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {renderComponent()}
        </motion.section>
      </main >
    </>
  )
}

export default App
