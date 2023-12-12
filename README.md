# Weather Forecast App

Este proyecto es una aplicación web que proporciona pronósticos del tiempo y datos relevantes de ciudades. Utiliza Next.js, React y una variedad de APIs para obtener y mostrar información meteorológica.

## Características

- Búsqueda de ciudades para obtener pronósticos del tiempo.
- Listado de los cinco lugares más relevantes basados en la popularidad.
- Visualización de pronósticos del tiempo para los próximos cinco días.
- Tabla de colores para representar diferentes temperaturas.

## Estructura del Proyecto

El proyecto se compone principalmente de los siguientes componentes y módulos:

- `Home`: Componente principal que maneja la página de inicio y la búsqueda.
- `WeatherForecastList`: Muestra el pronóstico del tiempo y los lugares relevantes.
- `Search`: Un componente para realizar búsquedas.
- `WeatherCard`, `CityNotFound`, `RelevantPlace`: Componentes para mostrar diferentes tipos de datos.
- `getWeatherFromCity`, `getFiveMostRelevantPlacesFromCity`: Funciones para obtener datos desde APIs externas.

## Instalación y Configuración

### Prerrequisitos

- Node.js
- npm o yarn

### Pasos de Instalación

1. Clonar el repositorio.
2. Instalar las dependencias: `npm install` o `yarn install`.
3. Configurar las variables de entorno (`.env`):
   - `RESERVAMOS_ENDPOINT`: Endpoint para la API de búsqueda de ciudades.
   - `OPENWEATHERMAP_ENDPOINT`: Endpoint para la API del tiempo.
   - `OPENWEATHERMAP_API_KEY`: Clave API para OpenWeatherMap.

### Ejecutar la Aplicación

Ejecutar `npm run dev` o `yarn dev` para iniciar la aplicación en modo desarrollo.
### Link de la aplicación:
- https://reservamos-mauve.vercel.app/
<img width="1437" alt="monterreydesktpo" src="https://github.com/Hermestech/reservamos/assets/64867364/d688dfb9-7014-4d6d-83dc-1f3f4bc289cb">

<img width="468" alt="monterrey tablet" src="https://github.com/Hermestech/reservamos/assets/64867364/be97fbf1-c881-4b56-b440-f2fc0115da95">
<img width="399" alt="mobile" src="https://github.com/Hermestech/reservamos/assets/64867364/8553e380-d4a3-4e4f-ad6e-aebe511c8700">

