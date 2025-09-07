import React, { useState, useEffect, memo } from "react";
import Card from "../common/Card";
import InfoItem from "../common/InfoItem";
import { WMO_CODES } from "../../constants/weatherCodes";
import { getUVIndexCategory } from "../../utils/formatters";
import { MapPin, Wind, Droplet, Cloud, Navigation2, Sun } from "lucide-react";

const CurrentWeather = ({ weather, locationName }) => {

  const { current, daily, timezone } = weather;
  const [displayTime, setDisplayTime] = useState(new Date());

  useEffect(() => {
    if (timezone) {
      setDisplayTime(new Date());
    }

    const timer = setInterval(() => {
      setDisplayTime(new Date());
    }, 60 * 1000);

    return () => clearInterval(timer);
  }, [timezone]);

  const weatherInfo = WMO_CODES[current.code] || {
    description: "Unknown",
    icon: <Cloud size={64} />,
  };
  
  const uvInfo = getUVIndexCategory(daily.uvMax[0]);


  return (
    <Card className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin size={20} /> {locationName}
            </h2>

            <p className="text-blue-100">
              {displayTime.toLocaleString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "short",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
                timeZone: timezone,
              })}
            </p>
          </div>

          <div className="text-5xl text-blue-200">
            {React.cloneElement(weatherInfo.icon, { size: 64 })}
          </div>
        </div>

        <div className="mt-4 text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-white tracking-tighter">
            {Math.round(current.temp)}°C
          </h1>

          <p className="text-2xl font-medium text-white">
            {weatherInfo.description}
          </p>

          <p className="text-lg text-blue-200 mt-1">
            Feels like {Math.round(current.feelsLike)}°C
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <InfoItem
            icon={<Wind size={20} className="text-blue-400" />}
            label="Wind"
            value={current.windSpeed}
            unit="km/h"
          />

          <div className="flex items-center gap-2 text-white">
            <Navigation2
              size={16}
              style={{ transform: `rotate(${current.windDir}deg)` }}
            />
            <span>{current.windDir}°</span>
          </div>
        </div>

        <InfoItem
          icon={<Droplet size={20} className="text-blue-400" />}
          label="Humidity"
          value={current.humidity}
          unit="%"
        />

        <div className="flex items-center space-x-3 text-sm">
          <div className="text-yellow-300">
            <Sun size={20} />
          </div>

          <span className="font-medium text-blue-100">UV Index:</span>

          <span className={`font-bold text-white px-2 py-0.5 rounded-full text-xs ${uvInfo.color}`}>
            {uvInfo.category}
          </span>

          <span className="font-bold text-gray-600 bg-amber-300 px-2 py-0.5 text-xs rounded-full">
            {uvInfo.advice}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default memo(CurrentWeather);