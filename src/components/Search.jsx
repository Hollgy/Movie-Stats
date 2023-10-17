import { useState } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2'
ChartJS.register(ArcElement, BarElement, LinearScale, CategoryScale, Tooltip, Legend);

import documentariesData from "../data/documentaries.json"
import specialsData from "../data/specials.json"
import featureData from "../data/feature-films.json"

import { searchConfig } from '../data/getAll';

const documentaries = Array.isArray(documentariesData) ? documentariesData : [];
const specials = Array.isArray(specialsData) ? specialsData : [];
const featureFilms = Array.isArray(featureData) ? featureData : [];

const MoviesBySearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([])

    const allData = [...documentariesData, ...specialsData, ...featureData];


    const handleSearch = () => {
        const filteredMovies = allData.filter((movie) =>
            movie.Title.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResults(filteredMovies)
        setFilteredMovies(filteredMovies)
    }

    return (
        <section>
            <h2>Search Results</h2>
            <input type="text"
                placeholder='Search for a Movie'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <div>
                <ul>{searchTerm !== "" &&
                    searchResults.map((movie) => (
                        <li key={movie.Title}>{movie.Title}</li>
                    ))}
                </ul>
                {filteredMovies.length === 1 &&
                    filteredMovies.map((movie) => (
                        <ul key={movie.Title}>
                            <li>Duration:{movie.Runtime}</li>
                            <li>Released:{movie.Premiere}</li>
                            <li>Language:{movie.Language}</li>
                        </ul>
                    ))}
            </div>
        </section >
    )
}

export default MoviesBySearch