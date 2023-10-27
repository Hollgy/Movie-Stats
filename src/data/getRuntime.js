export function getRuntimeConfig(documentaries, specials, featureFilms) {
    const allData = [...documentaries, ...specials, ...featureFilms];

    // Convert movie durations to minutes and add a "DurationInMinutes" property
    allData.forEach((movie) => {
        const duration = movie.Runtime;
        const parts = duration.split(" ");
        let totalMinutes = 0;

        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === "h") {
                const hours = parseInt(parts[i - 1]);
                totalMinutes += hours * 60;
            } else if (parts[i] === "min") {
                const minutes = parseInt(parts[i - 1]);
                totalMinutes += minutes;
            }
        }

        movie.DurationInMinutes = totalMinutes;
    });

    // Object för att räkna runtime för alla samt vardera kategori
    const runtimeCount = {};
    const docuRuntimeCount = {};
    const ffRuntimeCount = {};
    const specialRuntimeCount = {};

    // Räknar först runtime för alla filmer och sedan separat
    allData.forEach((movie) => {
        const runtime = movie.Runtime;
        runtimeCount[runtime] = (runtimeCount[runtime] || 0) + 1;
    });

    documentaries.forEach((movie) => {
        const docuRuntime = movie.Runtime;
        docuRuntimeCount[docuRuntime] = (docuRuntimeCount[docuRuntime] || 0) + 1;
    });

    featureFilms.forEach((movie) => {
        const ffRuntime = movie.Runtime;
        ffRuntimeCount[ffRuntime] = (ffRuntimeCount[ffRuntime] || 0) + 1;
    });

    specials.forEach((movie) => {
        const specialRuntime = movie.Runtime;
        specialRuntimeCount[specialRuntime] = (specialRuntimeCount[specialRuntime] || 0) + 1;
    });

    // samla unika tidsförlopp (runtimes) för filmer och skapar arrays för vardera, både allihopa och separat
    const uniqueRuntime = Object.keys(runtimeCount);
    const runtimeCountsArray = uniqueRuntime.map((runtime) => runtimeCount[runtime]);

    const uniqueDocuRuntime = Object.keys(docuRuntimeCount);
    const docuRuntimeCountsArray = uniqueDocuRuntime.map((docuRuntime) => docuRuntimeCount[docuRuntime]);

    const uniqueFFRuntime = Object.keys(ffRuntimeCount);
    const ffRuntimeCountsArray = uniqueFFRuntime.map((ffRuntime) => ffRuntimeCount[ffRuntime]);

    const uniqueSpecialRuntime = Object.keys(specialRuntimeCount);
    const specialRuntimeCountsArray = uniqueSpecialRuntime.map((specialRuntime) => specialRuntimeCount[specialRuntime]);

    // console.log(specialRuntimeCount);
    return {
        labels: uniqueRuntime,
        datasets: [
            {
                label: 'All movies by runtime',
                data: runtimeCountsArray,
                backgroundColor: 'green',
                borderColor: '#8cf59d',
                lineTension: 0.8,
                hitRadius: 30,
                hoverRadius: 8,
                
            },
            {
                label: 'Documentaries by runtime',
                data: docuRuntimeCountsArray,
                backgroundColor: 'blue',
                borderColor: '#8ca5f5',
                pointRadius: 2,
                borderWidth: 2,
                lineTension: 0.8,
                hitRadius: 30,
                hoverRadius: 8,
            },
            {
                label: 'Features by runtime',
                data: ffRuntimeCountsArray,
                backgroundColor: 'pink',
                borderColor: '#ec88f7',
                pointRadius: 2,
                borderWidth: 2,
                lineTension: 0.8,
                hitRadius: 30,
                hoverRadius: 8,
            },
            {
                label: 'Specials by runtime',
                data: specialRuntimeCountsArray,
                backgroundColor: 'red',
                borderColor: '#f78888',
                pointRadius: 2,
                borderWidth: 2,
                lineTension: 0.8,
                hitRadius: 30,
                hoverRadius: 8,
            },
        ],
    };
}
