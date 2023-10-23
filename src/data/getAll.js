// JS fil för funktioner som hämtar data från samtliga json filer, till skillnad från de tidigare genre specifika


const colors = ['#001219', '#005F73', '#0A9396', '#94D2BD', '#E9D8A6', '#EE9B00', '#CA6702', '#BB3E03', '#AE2012', '#9B2226', '#9A8EAB', '#F5C1BC', '#57A0D3', '#FFAA99', '#669966', '#CCFF99', '#FACC2E', '#996699', '#3399CC']


// Bar chart för premiärer
// funktion för att hämta releaser i månatligt format
export function getMonthConfig(documentaries, specials, featureFilms) {
    const allData = [...documentaries, ...specials, ...featureFilms]
    // console.log('Monthly movie data from all genres', allData);

    const premiereCount = []

    allData.forEach(movie => {
        const premiere = new Date(movie.Premiere)
        const month = premiere.getMonth()
        if (premiereCount[month]) {
            premiereCount[month]++
        } else {
            premiereCount[month] = 1
        }
    })


    const uniqueMonth = Object.keys(premiereCount).map(month => Number(month))
    const monthCountsArray = uniqueMonth.map(month => premiereCount[month])


    return {
        labels: uniqueMonth.map(month => (new Date(0, month)).toLocaleString('default', { month: 'short' })),
        datasets: [{
            label: 'Movies by premier month',
            data: monthCountsArray,
            backgroundColor: colors,
        }
        ]
    }
}



//BAR chart för genre
export function getGenreConfig(documentaries, specials, featureFilms) {
    const allData = [...documentaries, ...specials, ...featureFilms];

    const genreCount = {};
    // console.log(genreCount);

    allData.forEach(movie => {
        let genre = movie.Genre;
        if (!genre) {
            genre = "Documentary";
        }

        // mappa ihop subgenre till större genre
        const genreMap = {
            'comedy': 'Comedy',
            'thriller': 'Thriller',
            'action': 'Action',
            'drama': 'Drama',
            'mystery': 'Mystery',
            'animation': 'Animated', 
            'animated': 'Animated', 
        };

        for (const keyword in genreMap) {
            if (genre.includes(keyword)) {
                genre = genreMap[keyword];
                break; 
            }
        }

        if (genreCount[genre]) {
            genreCount[genre]++;
        } else {
            genreCount[genre] = 1;
        }
    });


    const genreCountArray = Object.entries(genreCount)
        .map(([genre, count]) => ({ genre, count }));

    genreCountArray.sort((a, b) => b.count - a.count);
    //stortera i mängdordning av genre

    const labels = genreCountArray.map(item => item.genre);
    const data = genreCountArray.map(item => item.count);

    return {
        labels: labels,
        datasets: [{
            label: 'All movies by Genre',
            data: data,
            backgroundColor: colors
        }]
    };
}


//Sökconfig
export function searchConfig(documentaries, specials, featureFilms, searchTerm) {
    const allData = [...documentaries, ...specials, ...featureFilms];
    console.log('All movie search data', allData);

    const filteredMovies = allData.filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log('Sökresultat', filteredMovies);

    return filteredMovies;
}


