import { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchWeatherData, searchLocation } from '../api/weatherService';
import { getDynamicBackground } from '../utils/formatters';

export const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState({ name: 'Greater Noida', lat: 28.4744, lon: 77.5040 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSearching, setIsSearching] = useState(false);

    const fetchWeather = useCallback(async (lat, lon) => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeatherData(lat, lon);
            const processedData = {
                timezone: data.timezone,
                current: {
                    temp: data.current.temperature_2m,
                    feelsLike: data.current.apparent_temperature,
                    humidity: data.current.relative_humidity_2m,
                    windSpeed: data.current.wind_speed_10m,
                    windDir: data.current.wind_direction_10m,
                    code: data.current.weather_code,
                    isDay: data.current.is_day,
                },
                hourly: {
                    time: data.hourly.time,
                    temp: data.hourly.temperature_2m,
                    feelsLike: data.hourly.apparent_temperature,
                    code: data.hourly.weather_code,
                },
                daily: {
                    time: data.daily.time,
                    code: data.daily.weather_code,
                    maxTemp: data.daily.temperature_2m_max,
                    minTemp: data.daily.temperature_2m_min,
                    sunrise: data.daily.sunrise,
                    sunset: data.daily.sunset,
                    uvMax: data.daily.uv_index_max,
                    precipProb: data.daily.precipitation_probability_max,
                }
            };
            setWeather(processedData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
            setIsSearching(false);
        }
    }, []);


    const handleSearch = useCallback(async (city, lat = null, lon = null) => {
        setIsSearching(true);
        setError(null);
        try {
            let newLat, newLon, newName;
            if (lat !== null && lon !== null) {
                newName = city;
                newLat = lat;
                newLon = lon;
            } else {
                const { name, latitude, longitude } = await searchLocation(city);
                newName = name;
                newLat = latitude;
                newLon = longitude;
            }
            setLocation({ name: newName, lat: newLat, lon: newLon });
        } catch (err) {
            setError(err.message);
            setIsSearching(false);
        }
    }, []);


    useEffect(() => {
        if (location.lat && location.lon) {
            fetchWeather(location.lat, location.lon);
        }
    }, [location.lat, location.lon, fetchWeather]);


    const backgroundStyle = useMemo(() => {
        if (!weather){
            return 'from-gray-400 to-gray-600';
        }

        return getDynamicBackground(weather.current.code, weather.current.isDay);
    }, [weather]);


    const alerts = useMemo(() => {
        const list = [];
        if (!weather) return list;

        if (weather.daily.code[0] >= 95) {
            list.push("Severe thunderstorm warning.");
        } 
        else if (weather.daily.code[0] >= 65) {
            list.push("Heavy rain expected.");
        }
        return list;
    }, [weather]);


    return { weather, location, loading, error, isSearching, handleSearch, fetchWeather, backgroundStyle, alerts };
};