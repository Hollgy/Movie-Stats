// JS fil för funktioner som hämtar data från samtliga json filer, till skillnad från de tidigare genre specifika


const colors = ['#F6EEE5', '#C0856B', '#801316', '#B69885', '#8FD89F', '#4C8E85', '#D45B5B', '#6DAB80', '#BCED91', '#E0AFA0', '#9A8EAB', '#F5C1BC', '#57A0D3', '#FFAA99', '#669966', '#CCFF99', '#FACC2E', '#996699', '#3399CC']



// funktion för att hämta releaser i månatligt format
export function getMonthConfig(documentaries, specials, featureFilms) {
    const allData = [...documentaries, ...specials, ...featureFilms]
    // console.log('Monthly movie data from all genres', allData);

    const premiereCount = []

    allData.forEach(movie => {
        const premiere = new Date(movie.Premiere)
        const month = premiere.getMonth(

        )
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
            backgroundColor: colors
        }]
    }
}

export function getRuntimeConfig(documentaries, specials, featureFilms) {
    const allData = [...documentaries, ...specials, ...featureFilms]
    // console.log('All movie data runtime', allData);

    const runtimeCount = []

    allData.forEach(movie => {
        const runtime = movie.Runtime
        if (runtimeCount[runtime]) {
            runtimeCount[runtime]++
        } else {
            runtimeCount[runtime] = 1
        }
    })

    const uniqueRuntime = Object.keys(runtimeCount)
    const runtimeCountsArray = uniqueRuntime.map(runtime => runtimeCount[runtime])

    return {
        labels: uniqueRuntime,
        datasets: [{
            label: 'All movies by runtime',
            data: runtimeCountsArray,
            backgroundColor: colors
        }]
    }
}

export function getGenreConfig(documentaries, specials, featureFilms) {
    const allData = [...documentaries, ...specials, ...featureFilms]
    // console.log('All movie data runtime', allData);

    const genreCount = []

    allData.forEach(movie => {
        let genre = movie.Genre
        // TODO Se nedanför!
        if (!genre) {
            genre = "Documentary";
        }
        if (genre.includes('comedy')) {
            genre = "Comedy"
        }
        if (genre.includes('thriller')) {
            genre = "Thriller"
        }
        if (genre.includes('action')) {
            genre = "Action"
        }
        if (genre.includes('drama')) {
            genre = "Drama"
        }
        if (genre.includes('mystery')) {
            genre = "Mystery"
        }
        if (genre.includes('animation' && 'animated')) {
            genre = "Animated"
        }
        //TODO check if necessary to reduce amount of genres, alt. make another pie for lesser amounts
        if (genreCount[genre]) {
            genreCount[genre]++
        } else {
            genreCount[genre] = 1
        }

    })

    const uniqueGenre = Object.keys(genreCount)
    const genreCountsArray = uniqueGenre.map(genre => genreCount[genre])

    return {
        labels: uniqueGenre,
        datasets: [{
            label: 'All movies by Genre',
            data: genreCountsArray,
            backgroundColor: colors
        }]
    }
}

export function searchConfig(documentaries, specials, featureFilms, searchTerm) {
    const allData = [...documentaries, ...specials, ...featureFilms];
    console.log('All movie search data', allData);

    const filteredMovies = allData.filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log('Sökresultat', filteredMovies);

    return filteredMovies;
}


