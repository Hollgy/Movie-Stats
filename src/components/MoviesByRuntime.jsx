import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, PointElement, CategoryScale, LineElement  } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(Tooltip, Legend, PointElement, LineElement);

import documentariesData from "../data/json/documentaries.json"
import specialsData from "../data/json/specials.json"
import featureData from "../data/json/feature-films.json"

import { getRuntimeConfig } from '../data/getRuntime';



const MoviesByRuntime = () => {
    const allRuntimeConfig = getRuntimeConfig(
        documentariesData,
        specialsData,
        featureData
    )
    return (
        <section>
            <h2>Movies by Runtime</h2>
            <Line data={allRuntimeConfig} />
        </section>
    )
}

export default MoviesByRuntime