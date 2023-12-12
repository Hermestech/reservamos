import 'server-only'

import { WeatherQueryParams, CityTerminal, WeatherApiResponse, DailyForecast } from './definitions' 
import { ValidCountries } from './enums'

export async function getCitiesData(searchTerm: string) {
    const url = `${process.env.RESERVAMOS_ENDPOINT}?q=${searchTerm}`;
    const res = await fetch(url);
    const data = await res.json();
    
    const searchFields = ['slug', 'city_slug', 'display', 'ascii_display', 'city_name', 'city_ascii_name', 'state'];

    const filteredData = data.filter((item:any) => {
        return searchFields.some(field => item[field]?.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    return filteredData;
}



async function extractCoordsFromCity(city: CityTerminal) {
    const { lat, long } = city

    return { lat, lon: long } 
}

async function getWeatherFromCoords(weatherQueryParams: WeatherQueryParams) {
    const baseUrl = process.env.OPENWEATHERMAP_ENDPOINT;
    const url = `${baseUrl}?lat=${weatherQueryParams.coords.lat}&lon=${weatherQueryParams.coords.lon}&appid=${weatherQueryParams.appId}`;

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) throw new Error('Error fetching weather data');

    const data = await res.json();

    return data
}

export async function getWeatherFromCity(searchedCity: string) { 
    const citiesData = await getCitiesData(searchedCity)
    if (!citiesData.length) return { city: null, nextFiveDaysForecast: null, notFound: true}

    const city = citiesData[0]

    const coords = await extractCoordsFromCity(city)

    const weatherQueryParams: WeatherQueryParams = {
        coords,
        appId: process.env.OPENWEATHERMAP_API_KEY
    }

    const weatherData = await getWeatherFromCoords(weatherQueryParams);
    const nextFiveDaysForecast = getNextFiveDaysWeather(weatherData);

    return {
        city,
        nextFiveDaysForecast
    }
}

function getNextFiveDaysWeather(weatherData: WeatherApiResponse): DailyForecast[] {
    const today = new Date();
    const nextFiveDays = [];

    for (let i = 0; i < 5; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);

        
        const dateStr = nextDay.toISOString().split('T')[0];

        const dailyForecast = weatherData.list.filter(entry => 
            entry.dt_txt.startsWith(dateStr)
        );

        if (dailyForecast.length > 0) {
            const dailyTemps = dailyForecast.map(forecast => forecast.main.temp);
            const maxTemp = Math.max(...dailyTemps);
            const minTemp = Math.min(...dailyTemps);

            nextFiveDays.push({
                date: dateStr,
                maxTemp,
                minTemp
            });
        }
    }

    return nextFiveDays;
}
