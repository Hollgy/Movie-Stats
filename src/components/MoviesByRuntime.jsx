import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, PointElement, CategoryScale, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2'
ChartJS.register(Tooltip, Legend, PointElement, LineElement);
import { motion } from 'framer-motion';

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
        <motion.section
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ delay: 0.2, duration: 1, type: 'easeIn' }}
        >
            <h2>Movies by Runtime</h2>
            <Line data={allRuntimeConfig} />
        </motion.section>
    )
}

export default MoviesByRuntime