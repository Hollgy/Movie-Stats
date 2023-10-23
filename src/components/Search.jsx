import React, { useState } from 'react';
import documentariesData from "../data/json/documentaries.json";
import specialsData from "../data/json/specials.json";
import featureData from "../data/json/feature-films.json";
import '../styles/MoviesBySearch.css';


const MoviesBySearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const allData = [...documentariesData, ...specialsData, ...featureData];

    const handleSearch = () => {
        const filteredMovies = allData.filter((movie) =>
            movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredMovies);
        setFilteredMovies(filteredMovies);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch();
    };


    return (
        <section>
            <input
                type="text"
                placeholder='Search for a Movie'
                value={searchTerm}
                onChange={handleChange}
            />
            <ul className='text'>
                {searchTerm !== "" &&
                    searchResults.map((movie) => (
                        <li key={movie.Title}>{movie.Title}</li>
                    ))}
            </ul>
            {filteredMovies.length === 1 &&
                filteredMovies.map((movie) => (
                    <ul className='text' key={movie.Title}>
                        <li>Duration: {movie.Runtime}</li>
                        <li>Released: {movie.Premiere}</li>
                        <li>Language: {movie.Language}</li>
                    </ul>
                ))}
        </section>
    );
};

export default MoviesBySearch;
