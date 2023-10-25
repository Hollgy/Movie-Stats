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


  const buttonHover = {
    scale: 1.5,
    transition: '0.4s ease-in-out;',
    boxShadow: '#ffffff'
  }

  const buttonActive = {
    color: '#F18805',
    scale: 1.5,
  }
  return (
    <>
      <main>
        <header>
          <motion.h1
            initial={{ y: -280 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
          >
            Movie Stats
          </motion.h1>
          <hr style={{ width: '50vw', backgroundColorcolor: '#FFF83F' }} />
        </header>
        <div className="component-buttons">
          <motion.button title='Search'
            whileHover={buttonHover}
            while={buttonActive}
            onClick={() => setActiveComponent('search')}><motion.i
              className="ri-search-line"></motion.i></motion.button>
          <motion.button title='Language'
            whileHover={buttonHover}
            onClick={() => setActiveComponent('language')}><i className="ri-translate-2"></i>
          </motion.button>
          <motion.button title='Genre'
            whileHover={buttonHover}
            onClick={() => setActiveComponent('genre')}><i className="ri-movie-2-line"></i></motion.button>
          <motion.button title='Premiere'
            whileHover={buttonHover}
            onClick={() => setActiveComponent('month')}><i className="ri-calendar-2-line"></i></motion.button>
          <motion.button title='Runtime'
            whileHover={buttonHover}
            onClick={() => setActiveComponent('runtime')}><i className="ri-time-line"></i></motion.button>
        </div>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className='render-section'
        >
          {renderComponent()}
        </motion.section>
      </main >
    </>
  )
}

export default App
