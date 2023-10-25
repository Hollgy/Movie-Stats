
import data from './json/specials.json'

const colors = [
    "#FF5733", "#33FF57", "#336BFF", "#FF33A5", "#FF336B", "#57FF33", "#33FFA5", "#336BFF", "#5733FF", "#33A5FF", "#33FF6B", "#A5FF33", "#6BFF33", "#FF336B", "#33FF33", "#FFA533", "#336B33", "#FF5733", "#33A5FF", "#6B33FF"
];



export function getSpecialsConfig() {

    const languagueCount = []
    // console.log('Specials movie data', languagueCount);

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
            backgroundColor: colors,
            radius: '150',
        }]
    }
}