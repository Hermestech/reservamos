import Image from "next/image";
import { DailyForecast } from "../lib/definitions";

interface WeatherCardProps {
    forecast: DailyForecast;
}

function kelvinToCelsius(kelvin: number): number {
    return Number((kelvin - 273.15).toFixed(2));
}

const temperatureColors = {
    hot: 'bg-feedback-orange',
    warm: 'bg-decorative-light-yellow',
    cool: 'bg-decorative-pale-sky-blue',
};

function getTemperatureColor(temp:number) {
    if (temp > 30) return temperatureColors.hot; 
    if (temp > 20) return temperatureColors.warm; 
    return temperatureColors.cool;
}



export const WeatherCard: React.FC<WeatherCardProps> = ({ forecast }) => {
    const celsiusMaxTemp = kelvinToCelsius(forecast.maxTemp);
    const celsiusMinTemp = kelvinToCelsius(forecast.minTemp);
    const temperatureColor = getTemperatureColor(celsiusMaxTemp);

    const date = new Date(forecast.date);
    const formattedDate = date.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <article className={`w-full h-20  ${temperatureColor} rounded-md p-4 flex justify-between items-center `}>
            <div>
                <p className="weather-date">{formattedDate}</p>
                <p className="weather-temp">{celsiusMaxTemp}°C / {celsiusMinTemp}°C</p>
            </div>
            <div className="weather-icon">
                <Image src={`/weather-icons/${forecast.weather}.png`} width={50} height={50} alt={"imagen del clima"} />
            </div>
        </article>
    );
};