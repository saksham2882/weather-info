import React, { memo } from "react";
import Card from "../common/Card";
import { WMO_CODES } from "../../constants/weatherCodes";
import { Calendar, Cloud, Droplet } from "lucide-react";

const DailyForecast = ({ data }) => {
  const { time, code, maxTemp, minTemp, precipProb } = data;

  return (
    <Card className="col-span-12 md:col-span-7 lg:col-span-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <Calendar size={20} /> 7-Day Forecast
      </h3>

      <div className="space-y-3">
        {time.slice(0, 7).map((day, i) => {
          const weatherInfo = WMO_CODES[code[i]] || {
            icon: <Cloud />,
          };

          return (
            <div
              key={day}
              className="flex items-center justify-between bg-white/10 p-3 rounded-lg hover:scale-102 hover:opacity-80 transition-all"
            >
              <p className="font-bold text-blue-100 w-1/4">
                {new Date(day).toLocaleDateString("en-US", {
                  weekday: "short",
                  day: "numeric",
                })}
              </p>

              <div className="flex items-center gap-2 w-1/4 justify-center text-blue-200">
                {React.cloneElement(weatherInfo.icon, { size: 24 })}
              </div>

              <div className="flex items-center gap-2 w-1/4 justify-center text-sm text-cyan-300">
                <Droplet size={16} />
                <span>{precipProb[i]}%</span>
              </div>

              <p className="text-sm text-blue-200 w-1/4 text-right">
                {Math.round(minTemp[i])}°C /
                <span className="font-bold text-white">
                  {Math.round(maxTemp[i])}°C
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default memo(DailyForecast);
