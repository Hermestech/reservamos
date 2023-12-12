import fetchMock from 'jest-fetch-mock';
import { getWeatherFromCity } from './data';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('getWeatherFromCity', () => {
  it('fetches weather data correctly for a given city', async () => {
    const mockCity = 'Monterrey';
    const mockResponse = {
      city: { city_name: mockCity },
      nextFiveDaysForecast: [{}, {}, {}, {}, {}]
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const weatherData = await getWeatherFromCity(mockCity);

    expect(weatherData).toHaveProperty('city');
    expect(weatherData.city.city_name).toEqual(mockCity);
    expect(weatherData).toHaveProperty('nextFiveDaysForecast');
    expect(weatherData.nextFiveDaysForecast).toBeInstanceOf(Array);
    expect(weatherData.nextFiveDaysForecast).toHaveLength(5);
    expect(weatherData).not.toHaveProperty('notFound');
  });

  it('handles non-existent city correctly', async () => {
    const mockCity = 'NonExistentCity';
    fetchMock.mockResponseOnce(JSON.stringify({ notFound: true }));

    const weatherData = await getWeatherFromCity(mockCity);

    expect(weatherData).toHaveProperty('notFound', true);
  });
});

// El resto de tu código...
