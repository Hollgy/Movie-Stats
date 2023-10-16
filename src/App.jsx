import './App.css'
import SpecialsByLanguage from './components/SpecialsByLanguage'
import DocumentariesByLanguage from './components/DocumentariesByLanguage'
import FeaturesByLanguage from './components/FeaturesByLanguage'

function App() {


  return (
    <>
      <main>
        <h1>Movie-Stats</h1>
        <SpecialsByLanguage />
        <DocumentariesByLanguage />
        <FeaturesByLanguage />
      </main>
    </>
  )
}

export default App
