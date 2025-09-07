import { memo } from "react";
import Card from "../common/Card";
import InfoItem from "../common/InfoItem";
import { Sunrise, Sunset, Droplet, Wind, Navigation2 } from "lucide-react";

const AdditionalInfo = ({ weather }) => {
  const { daily, current } = weather;

  return (
    <Card className="col-span-12">
      <h3 className="text-lg font-semibold text-white mb-4">
        Additional Information
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="bg-white/10 p-4 rounded-lg hover:scale-102 transition-all">
          <h4 className="font-semibold text-blue-200 mb-2 flex items-center gap-2">
            <Sunrise size={20} /> Sun Times
          </h4>

          <InfoItem
            icon={<Sunrise size={16} />}
            label="Sunrise"
            value={new Date(daily.sunrise[0]).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />

          <InfoItem
            icon={<Sunset size={16} />}
            label="Sunset"
            value={new Date(daily.sunset[0]).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        </div>


        <div className="bg-white/10 p-4 rounded-lg hover:scale-102 transition-all">
          <h4 className="font-semibold text-blue-200 mb-2 flex items-center gap-2">
            <Droplet size={20} /> Humidity & Wind
          </h4>

          <InfoItem
            icon={<Droplet size={16} />}
            label="Humidity"
            value={current.humidity}
            unit="%"
          />

          <div className="flex items-center space-x-3 text-sm mt-2">
            <div className="text-blue-300">
              <Wind size={16} />
            </div>

            <span className="font-medium text-gray-300">Wind:</span>
            <span className="font-bold text-white">
              {current.windSpeed} km/h
            </span>

            <Navigation2
              size={16}
              style={{ transform: `rotate(${current.windDir}deg)` }}
              className="text-white"
            />
            <span className="font-bold text-white">
              {current.windDir}°
            </span>
          </div>
        </div>

      </div>
    </Card>
  );
};

export default memo(AdditionalInfo);
