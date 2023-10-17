
import data from './specials.json'

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


export function getSpecialsConfig() {
    // console.log('Specials movie data', data);

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
            label: 'Specials by languages',
            data: languageCountsArray,
            backgroundColor: colors
        }]
    }
}