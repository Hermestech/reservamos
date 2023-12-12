export const TemperatureColorTable: React.FC = () => {
    return (
        <table className="temperature-color-table">
            <thead>
                <tr>
                    <th>Color</th>
                    <th>Temperatura</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="bg-feedback-orange">Naranja</td>
                    <td>Mayor a 30°C</td>
                </tr>
                <tr>
                    <td className="bg-decorative-light-yellow">Amarillo claro</td>
                    <td>Entre 20°C y 30°C</td>
                </tr>
                <tr>
                    <td className="bg-decorative-pale-sky-blue">Azul cielo pálido</td>
                    <td>Menor a 20°C</td>
                </tr>
            </tbody>
        </table>
    );
};