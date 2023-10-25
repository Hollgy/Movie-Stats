import React, { useState, useEffect } from 'react';
import documentariesData from "../data/json/documentaries.json";
import specialsData from "../data/json/specials.json";
import featureData from "../data/json/feature-films.json";
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

    // animation för enstaka film adderad, bör finslipas, samt animering för komplett lista saknas.

    // Fixa animering för samtliga komponenter och fixa labels med

    return (
        <section>
            <motion.input
                className='search-input'
                type="text"
                placeholder='Search for a Movie'
                value={searchTerm}
                onChange={handleChange}
            />
            {filteredMovies.length === 1 ? (
                <motion.ul className=' text' key={filteredMovies[0].Title}
                    initial={{ scale: 1, opacity: 0, y: '50vh' }}
                    animate={{ scale: 1.3, opacity: 1, y: 0, }}
                    transition={{ delay: .3, duration: 1, type: 'tween' }}
                >
                    <li>Title: {filteredMovies[0].Title}</li>
                    <li>Duration: {filteredMovies[0].Runtime}</li>
                    <li>Released: {filteredMovies[0].Premiere}</li>
                    <li>Language: {filteredMovies[0].Language}</li>
                </motion.ul>
            ) : (
                <ul className=' text'
                >
                    {searchTerm !== "" &&
                        searchResults.map((movie) => (
                            <motion.li
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5, type: 'fadeIn' }}
                                key={movie.Title}>{movie.Title}</motion.li>
                        ))}
                </ul>
            )}
        </section>
    );
};

export default MoviesBySearch;
