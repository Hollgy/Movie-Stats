import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Pie } from 'react-chartjs-2'
ChartJS.register(ArcElement, BarElement, LinearScale, CategoryScale, Tooltip, Legend);

import documentariesData from "../data/documentaries.json"
import specialsData from "../data/specials.json"
import featureData from "../data/feature-films.json"

import { getGenreConfig } from '../data/getAll';



const MoviesByGenre = () => {
    const allGenreConfig = getGenreConfig(
        documentariesData,
        specialsData,
        featureData
    )
    return (
        <section>
            <h2>Movies by Genre</h2>
            <Pie data={allGenreConfig} />
        </section>
    )
}

export default MoviesByGenre