import './App.css'
import SpecialsByLanguage from './components/SpecialsByLanguage'
import DocumentariesByLanguage from './components/DocumentariesByLanguage'
import FeaturesByLanguage from './components/FeaturesByLanguage'
import MoviesByMonth from './components/MoviesByMonth'
import MoviesByRuntime from './components/MoviesByRuntime'
import MoviesByGenre from './components/MoviesByGenre'
import MoviesBySearch from './components/Search'
import { useState, useEffect } from 'react'

function App() {
  const [activeComponent, setActiveComponent] = useState('search')
  const [splashScreenVisible, setSplashScreenVisible] = useState(true)



  const renderComponent = () => {
    switch (activeComponent) {
      case 'specials':
        return <SpecialsByLanguage />
      case 'documentaries':
        return <DocumentariesByLanguage />
      case 'features':
        return <FeaturesByLanguage />
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
          <button onClick={() => setActiveComponent('search')}>Search</button>
          <button onClick={() => setActiveComponent('specials')}>Specials</button>
          <button onClick={() => setActiveComponent('documentaries')}>Documentaries</button>
          <button onClick={() => setActiveComponent('features')}>Features</button>
          <button onClick={() => setActiveComponent('genre')}>Genre</button>
          <button onClick={() => setActiveComponent('month')}>Month</button>
          <button onClick={() => setActiveComponent('runtime')}>Runtime</button>
        </div>
        <section className='render-section'>
          {renderComponent()}
        </section>
      </main>
    </>
  )
}

export default App
