import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
ChartJS.register(ArcElement, BarElement, LinearScale, CategoryScale, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'

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
        <section>
            <h2>Specials by Language</h2>
            <Pie data={specialConfig} />
            <h2>Feature-Films by Language</h2>
            <Pie data={FFConfig} options={optionsFF} />
            <h2>Documentaries by Language</h2>
            <Pie data={documentariesConfig} />
        </section>
    )
}

export default MoviesByLanguage