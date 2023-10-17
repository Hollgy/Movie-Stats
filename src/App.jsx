import './App.css'
import SpecialsByLanguage from './components/SpecialsByLanguage'
import DocumentariesByLanguage from './components/DocumentariesByLanguage'
import FeaturesByLanguage from './components/FeaturesByLanguage'
import MoviesByMonth from './components/MoviesByMonth'
import MoviesByRuntime from './components/MoviesByRuntime'
import MoviesByGenre from './components/MoviesByGenre'
import MoviesBySearch from './components/Search'

function App() {


  return (
    <>
      <main>
        <h2>Movie Search Result</h2>
        <MoviesBySearch />
        <h1>Movie-Stats</h1>
        <div className='piecharts'>
          <SpecialsByLanguage />
          <DocumentariesByLanguage />
          <FeaturesByLanguage />
          <MoviesByGenre />
        </div>
        <div className='barcharts'>
          <MoviesByMonth />
        </div>
        <div className='linecharts'>
          <MoviesByRuntime />
        </div>

      </main>
    </>
  )
}

export default App
