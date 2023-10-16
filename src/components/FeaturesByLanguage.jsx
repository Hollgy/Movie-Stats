import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
ChartJS.register(ArcElement, BarElement, LinearScale, CategoryScale, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'

import { getFFConfig } from '../data/getFF';

const FFConfig = getFFConfig()

const FeaturesByLanguage = () => {
    return(
        <section>
            <h2>Documentaries by Language</h2>
            <Pie data={FFConfig} />
        </section>
    )
}

export default FeaturesByLanguage