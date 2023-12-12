import { DailyForecast } from "../lib/definitions";

interface WeatherCardProps {
    forecast: DailyForecast;
}

function kelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ forecast }) => {
    const celsiusMaxTemp = kelvinToCelsius(forecast.maxTemp);
    const celsiusMinTemp = kelvinToCelsius(forecast.minTemp);


    const cardStyle = {
        backgroundColor: getTemperatureColor(celsiusMaxTemp)
    };

    return (
        <div className="weather-card" style={cardStyle}>
            <p className="weather-date">{forecast.date}</p>
            <p className="weather-temp">{celsiusMaxTemp}°C / {celsiusMinTemp}°C</p>
        </div>
    );
};

function getTemperatureColor(temp: number) {
    if (temp > 30) return '#FF5733'; 
    if (temp > 20) return '#FFC300'; 
    return '#3498DB';
}