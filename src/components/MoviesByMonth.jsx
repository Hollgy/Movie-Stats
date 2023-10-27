import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2'
ChartJS.register(ArcElement, BarElement, LinearScale, CategoryScale, Tooltip, Legend);
import { motion } from 'framer-motion';
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
        <motion.section
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ delay: 0.2, duration: 1, type: 'easeIn' }}>
            <h2>Movies by Month of Premiere</h2>
            <Bar data={allMonthsConfig} />
        </motion.section>
    )
}

export default MoviesByMonth