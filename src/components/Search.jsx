import React, { useState, useEffect } from 'react';
import documentariesData from "../data/json/documentaries.json";
import specialsData from "../data/json/specials.json";
import featureData from "../data/json/feature-films.json";
import '../styles/MoviesBySearch.css';
import { motion, useScroll } from "framer-motion"

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
            {filteredMovies.length === 1 ? (
                <motion.ul className='single text' key={filteredMovies[0].Title}
                    initial={{ scale: 1, opacity: 0.1, y: '50vh' }}
                    animate={{ scale: 1.3, opacity: 1, y: 0, }}
                    transition={{delay: .3, duration: 1, type: 'tween'}}

                >
                    <li>Title: {filteredMovies[0].Title}</li>
                    <li>Duration: {filteredMovies[0].Runtime}</li>
                    <li>Released: {filteredMovies[0].Premiere}</li>
                    <li>Language: {filteredMovies[0].Language}</li>
                </motion.ul>
            ) : (
                <ul className='search text'>
                    {searchTerm !== "" &&
                        searchResults.map((movie) => (
                            <li key={movie.Title}>{movie.Title}</li>
                        ))}
                </ul>
            )}
        </section>
    );
};

export default MoviesBySearch;
