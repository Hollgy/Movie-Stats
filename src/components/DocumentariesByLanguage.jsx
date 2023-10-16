import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
ChartJS.register(ArcElement, BarElement, LinearScale, CategoryScale, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'

import { getDocumentariesConfig } from '../data/getDocumentaries';

const documentariesConfig = getDocumentariesConfig()

const DocumentariesByLanguage = () => {
    return(
        <section>
            <h2>Documentaries by Language</h2>
            <Pie data={documentariesConfig} />
        </section>
    )
}

export default DocumentariesByLanguage