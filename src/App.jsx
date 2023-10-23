import './App.css'
import MoviesByMonth from './components/MoviesByMonth'
import MoviesByRuntime from './components/MoviesByRuntime'
import MoviesByGenre from './components/MoviesByGenre'
import MoviesBySearch from './components/Search'
import MoviesByLanguage from './components/MoviesByLanguage'
import 'remixicon/fonts/remixicon.css'
import { useState, useEffect } from 'react'

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
          <div className="splash-screen" id="splash-screen">
            <div className="splash-content">
              MovieStats
            </div>
          </div>
        )}
        <header>
          <h1>
            Movie Stats
          </h1>
        </header>
        <div className="component-buttons">
          <button title='Search' onClick={() => setActiveComponent('search')}><i className="ri-search-line"></i></button>
          <button title='Language' onClick={() => setActiveComponent('language')}><i className="ri-translate-2"></i>
          </button>
          <button title='Genre' onClick={() => setActiveComponent('genre')}><i className="ri-movie-2-line"></i></button>
          <button title='Premiere' onClick={() => setActiveComponent('month')}><i className="ri-calendar-2-line"></i></button>
          <button title='Runtime' onClick={() => setActiveComponent('runtime')}><i className="ri-time-line"></i></button>
        </div>
          {renderComponent()}
      </main>
        </>
  )
}

export default App
