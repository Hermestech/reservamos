interface Coords {
    lat: number | null;
    lon: number | null;
}

export type WeatherQueryParams = {
    coords: Coords;
    appId: string | undefined;
};

export interface CityTerminal {
    id: number;
    slug: string;
    city_slug: string;
    display: string;
    ascii_display: string;
    city_name: string;
    city_ascii_name: string;
    state: string;
    country: string;
    lat: number | null;
    long: number | null;
    result_type: string;
    popularity: string;
    sort_criteria: number;
}

export type WeatherApiResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<WeatherDataPoint>;
  city: CityData;
};

export type WeatherDataPoint = {
  dt: number;
  main: {
    temp: number;
  };
    weather: Array<any>;
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    }
  dt_txt: string;
};

export type DailyForecast = {
  date: string;
  maxTemp: number;
  minTemp: number;
};

type CityData = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
};