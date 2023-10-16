
import data from './specials.json'

const colors = ['#F6EEE5', '#C0856B', '#801316', '#B69885', '#8FD89F']

export function getSpecialsConfig() {
    console.log('Specials movie data', data);

    const languagueCount = []

    data.forEach(obj => {
        const language = obj.Language
        if (languagueCount[language]){
            languagueCount[language]++
        } else {
            languagueCount[language] = 1
        }
    })

    const uniqueLanguages = Object.keys(languagueCount)
    const languageCountsArray  = uniqueLanguages.map(language => languagueCount[language])

    return {
        labels: uniqueLanguages,
        datasets: [{
            label: 'Specials by languages',
            data: languageCountsArray,
            backgroundColor: colors
        }]
    }
}