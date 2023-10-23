import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2'
ChartJS.register(ArcElement, BarElement, LinearScale, CategoryScale, Tooltip, Legend);

import documentariesData from "../data/json/documentaries.json"
import specialsData from "../data/json/specials.json"
import featureData from "../data/json/feature-films.json"

import { getMonthConfig } from '../data/getAll';



const MoviesByMonth = () => {
    const allMonthsConfig = getMonthConfig(
        documentariesData,
        specialsData,
        featureData
    )
    return (
        <section>
            <h2>Movies by Month of Premiere</h2>
            <Bar data={allMonthsConfig} />
        </section>
    )
}

export default MoviesByMonth