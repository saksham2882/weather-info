import React, { memo } from "react";
import Card from "../common/Card";
import { WMO_CODES } from "../../constants/weatherCodes";
import { Cloud } from "lucide-react";

const HourlyForecast = ({ hourlyData }) => {
  const now = new Date();
  const startIndex = hourlyData.time.findIndex((t) => new Date(t) > now);
  const forecastHours = hourlyData.time.slice(startIndex, startIndex + 24);

  return (
    <Card className="col-span-12">
      <h3 className="text-lg font-semibold text-white mb-4">
        Next 24 Hours
      </h3>
      
      <div className="flex overflow-x-auto space-x-4 pb-4 pt-2 custom-scrollbar">
        {forecastHours.map((time, i) => {
          const index = startIndex + i;
          const temp = hourlyData.temp[index];
          const feelsLike = hourlyData.feelsLike[index];
          const weatherInfo = WMO_CODES[hourlyData.code[index]] || {
            icon: <Cloud />,
          };

          return (
            <div
              key={time}
              className="flex flex-col items-center space-y-1 p-3 bg-white/10 rounded-lg min-w-[90px] text-center hover:scale-110 hover:opacity-80"
            >
              <p className="text-sm text-blue-100">
                {new Date(time).toLocaleTimeString([], {
                  hour: "numeric",
                  hour12: true,
                })}
              </p>

              <div className="text-blue-200 my-1">
                {React.cloneElement(weatherInfo.icon, { size: 28 })}
              </div>

              <p className="text-xl font-bold text-white">
                {Math.round(temp)}°C
              </p>

              <p className="text-xs text-blue-200">
                Feels {Math.round(feelsLike)}°C
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default memo(HourlyForecast);