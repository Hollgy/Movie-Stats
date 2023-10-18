
import data from './feature-films.json'

const colors = [
    '#FF5733',
    '#FFD700',
    '#FFA500',
    '#008000',
    '#4682B4',
    '#800080',
    '#9370DB',
    '#66CDAA',
    '#FF69B4',
    '#8A2BE2',
    '#5F9EA0',
    '#CD5C5C'
];
const border = [
    '1px solid black'
]
export function getFFConfig() {
    // console.log('FF movie data', data);

    const languagueCount = []

    data.forEach(movie => {
        const language = movie.Language
        if (languagueCount[language]) {
            languagueCount[language]++
        } else {
            languagueCount[language] = 1
        }
    })

    const uniqueLanguages = Object.keys(languagueCount)
    const languageCountsArray = uniqueLanguages.map(language => languagueCount[language])
    languageCountsArray.sort((a, b) => b - a)

    return {
        labels: uniqueLanguages,
        datasets: [{
            label: 'Feature-Films by languages',
            data: languageCountsArray,
            backgroundColor: colors,
            borderWidth: 2,
            font: {
                family: 'Helvetica',
                size: 50
            }
        }],
    }
}