import React from 'react';
import { DailyForecast } from "../lib/definitions";

interface DailyWeatherRowProps {
    forecast: DailyForecast;
}

export const DailyWeatherRow: React.FC<DailyWeatherRowProps> = ({ forecast }) => (
    <tr className="border-b-2 border-black">
        <td className="p-3 font-bold">{forecast.date}</td>
        <td className="p-3 font-bold">{forecast.maxTemp}°C</td>
        <td className="p-3 font-bold">{forecast.minTemp}°C</td>
    </tr>
);
