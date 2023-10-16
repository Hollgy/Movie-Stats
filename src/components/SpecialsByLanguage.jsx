import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
ChartJS.register(ArcElement, BarElement, LinearScale, CategoryScale, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'

import { getSpecialsConfig } from '../data/getSpecials';

const specialConfig = getSpecialsConfig()

const SpecialsByLanguage = () => {
    return(
        <section>
            <h2>Specials by Language</h2>
            <Pie data={specialConfig} />
        </section>
    )
}

export default SpecialsByLanguage