import {
  Sun,
  Cloud,
  Cloudy,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
} from "lucide-react";

export const WMO_CODES = {
  0: {
    description: "Clear sky",
    icon: <Sun size={24} />,
  },
  1: {
    description: "Mainly clear",
    icon: <Sun size={24} />,
  },
  2: {
    description: "Partly cloudy",
    icon: <Cloud size={24} />,
  },
  3: {
    description: "Overcast",
    icon: <Cloudy size={24} />,
  },
  45: {
    description: "Fog",
    icon: <Cloudy size={24} />,
  },
  48: {
    description: "Rime fog",
    icon: <Cloudy size={24} />,
  },
  51: {
    description: "Light drizzle",
    icon: <CloudDrizzle size={24} />,
  },
  53: {
    description: "Drizzle",
    icon: <CloudDrizzle size={24} />,
  },
  55: {
    description: "Dense drizzle",
    icon: <CloudDrizzle size={24} />,
  },
  61: {
    description: "Slight rain",
    icon: <CloudRain size={24} />,
  },
  63: {
    description: "Rain",
    icon: <CloudRain size={24} />,
  },
  65: {
    description: "Heavy rain",
    icon: <CloudRain size={24} />,
  },
  71: {
    description: "Slight snow",
    icon: <CloudSnow size={24} />,
  },
  73: {
    description: "Snow",
    icon: <CloudSnow size={24} />,
  },
  75: {
    description: "Heavy snow",
    icon: <CloudSnow size={24} />,
  },
  77: {
    description: "Snow grains",
    icon: <CloudSnow size={24} />,
  },
  80: {
    description: "Rain showers",
    icon: <CloudRain size={24} />,
  },
  81: {
    description: "Moderate showers",
    icon: <CloudRain size={24} />,
  },
  82: {
    description: "Violent showers",
    icon: <CloudRain size={24} />,
  },
  85: {
    description: "Snow showers",
    icon: <CloudSnow size={24} />,
  },
  86: {
    description: "Heavy snow showers",
    icon: <CloudSnow size={24} />,
  },
  95: {
    description: "Thunderstorm",
    icon: <CloudLightning size={24} />,
  },
  96: {
    description: "Thunderstorm & Hail",
    icon: <CloudLightning size={24} />,
  },
  99: {
    description: "Heavy Thunderstorm",
    icon: <CloudLightning size={24} />,
  },
};
