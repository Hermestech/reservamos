import { WeatherCard } from "./weather-card";
import { CityNotFound } from "./citiy-not-found";
import { RelevantPlace } from "./relevant-place";
import { getWeatherFromCity, getFiveMostRelevantPlacesFromCity } from "../lib/data";
import { CityTerminal, RelevantPlaceType } from "../lib/definitions"; 
import { TemperatureColorTable } from "./reusable/temperature-color-table";

type WeatherForecastListProps = {
    query: string;
}


export async function WeatherForecastList({query}: WeatherForecastListProps) {
    const forecastData = await getWeatherFromCity(query);

    const fiveMostRelevantPlaces = await getFiveMostRelevantPlacesFromCity(query);

    const cityTerminal: CityTerminal = forecastData.city

    if (forecastData.notFound) {
        return <CityNotFound />;
    }

return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10">
        <div className="col-span-1 lg:col-span-1 flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl font-bold">{cityTerminal.city_name}, {cityTerminal.country}</h2>
            <div className="flex justify-end items-center">
                <TemperatureColorTable />
            </div>
        </div>
    
        <div className="col-span-1 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {
                fiveMostRelevantPlaces.map((place: RelevantPlaceType) => ( 
                    <RelevantPlace key={place.display} display={place.display} city_name={place.city_name} country={place.country} />
                ))
            }
        </div>
   
        <div className="col-span-1 lg:col-span-1 grid grid-cols-1 gap-4 justify-center items-center">
            {forecastData.nextFiveDaysForecast && forecastData.nextFiveDaysForecast.map(forecast => (
                <WeatherCard key={forecast.date} forecast={forecast} />
            ))}
        </div>
    </div>
);
}
