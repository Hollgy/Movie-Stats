import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
ChartJS.register(ArcElement, BarElement, LinearScale, CategoryScale, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'
import { motion } from 'framer-motion';

import { getSpecialsConfig } from '../data/getSpecials';
import { getFFConfig } from '../data/getFF';
import { getDocumentariesConfig } from '../data/getDocumentaries';

const documentariesConfig = getDocumentariesConfig()
const FFConfig = getFFConfig()
const specialConfig = getSpecialsConfig()

const optionsFF = {
    plugins: {
        title: {
            display: true,
            text: 'Feature-Films',
        }
    }
}


const MoviesByLanguage = () => {
    return (
        <motion.section
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ delay: 0.2, duration: 1, type: 'easeIn' }}>
            <h2
            >Specials by Language</h2>
            <Pie data={specialConfig} />
            <h2>Feature-Films by Language</h2>
            <Pie data={FFConfig} options={optionsFF} />
            <h2>Documentaries by Language</h2>
            <Pie data={documentariesConfig} />
        </motion.section>
    )
}

export default MoviesByLanguage