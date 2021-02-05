export const getForecast = (long, lat) => {
    //let uriEncodedCity = encodeURIComponent(city);
    return fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?units=metric&lat=${lat}&lon=${long}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2374eea181msha6400f3c7ae0a84p1498bejsnf11abe35d8b7",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(jsonResponse => {
        return jsonResponse.city ? {city: jsonResponse.city.name, forecasts: jsonResponse.list} : null
    })
    .catch(err => {
        console.error(err);
    });
}