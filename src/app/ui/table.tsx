import { WeatherCard } from "./weather-card";
import { CityNotFound } from "./citiy-not-found";
import { getWeatherFromCity } from "../lib/data";

type WeatherForecastListProps = {
    query: string;
}


export async function WeatherForecastList({query}: WeatherForecastListProps) {
    const forecastData = await getWeatherFromCity(query);

    if (forecastData.notFound) {
        return <CityNotFound />;
    }

    return (
        <div className="forecast-list">
            {forecastData.nextFiveDaysForecast.map(forecast => (
                <WeatherCard key={forecast.date} forecast={forecast} />
            ))}
        </div>
    );
}
