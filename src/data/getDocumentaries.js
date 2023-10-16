import data from './documentaries.json'

const colors = ['#FF5733', '#4A90E2', '#D68AFF', '#1BC5A2', '#F2910D', '#6D4C00']


export function getDocumentariesConfig() {
    console.log('Documentaries movie data', data);

    const languagueCount = []

    data.forEach(obj => {
        const language = obj.Language
        if (languagueCount[language]) {
            languagueCount[language]++
        } else {
            languagueCount[language] = 1
        }
    })

    const uniqueLanguages = Object.keys(languagueCount)
    const languageCountsArray = uniqueLanguages.map(language => languagueCount[language])

    return {
        labels: uniqueLanguages,
        datasets: [{
            label: 'Documentaries by languages',
            data: languageCountsArray,
            backgroundColor: colors
        }]
    }
}