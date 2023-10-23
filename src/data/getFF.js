
import data from './json/feature-films.json'

const colors = [
    "#FF5733", "#33FF57", "#336BFF", "#FF33A5", "#FF336B", "#57FF33", "#33FFA5", "#336BFF", "#5733FF", "#33A5FF", "#33FF6B", "#A5FF33", "#6BFF33", "#FF336B", "#33FF33", "#FFA533", "#336B33", "#FF5733", "#33A5FF", "#6B33FF"
];


export function getFFConfig() {
    const languageCount = {};
    // console.log(languageCount);

    data.map(movie => {
        const language = movie.Language;
        if (languageCount[language]) {
            languageCount[language]++;
        } else {
            languageCount[language] = 1;
        }
    });

    const uniqueLanguages = Object.keys(languageCount);
    const languageCountsArray = uniqueLanguages.map(language => languageCount[language]);

    return {
        labels: uniqueLanguages,
        datasets: [{
            label: 'Feature-Films by languages',
            data: languageCountsArray,
            backgroundColor: colors,
            borderWidth: 2,
            radius: 150,
        }],
    };
}