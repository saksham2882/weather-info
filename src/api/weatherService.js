export const fetchWeatherData = async (lat, lon) => {
    const forecastParams = `latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,is_day&hourly=temperature_2m,apparent_temperature,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto`;
    const forecastApiUrl = `https://api.open-meteo.com/v1/forecast?${forecastParams}`;

    const response = await fetch(forecastApiUrl);
    if (!response.ok) {
        throw new Error(`Weather API Error: ${response.statusText}`);
    }

    const data = await response.json();
    if (data.error) {
        throw new Error(data.reason);
    }

    return data;
};


export const searchLocation = async (city) => {
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
    );

    const data = await response.json();
    if (data.results && data.results.length > 0) {
        return data.results[0];
    }

    throw new Error(`Could not find location: ${city}`);
};


export const fetchCitySuggestions = async (query) => {
    if (!query) return [];
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=10&language=en&format=json`
    );

    const data = await response.json();

    return data.results || [];
};