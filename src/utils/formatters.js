export const getUVIndexCategory = (uv) => {
    if (uv <= 2)
        return {
            category: "Low",
            color: "bg-green-500",
            advice: "No protection needed.",
        };
    if (uv <= 5)
        return {
            category: "Moderate",
            color: "bg-yellow-500",
            advice: "Wear sunglasses.",
        };
    if (uv <= 7)
        return {
            category: "High",
            color: "bg-orange-500",
            advice: "Use sunscreen.",
        };
    if (uv <= 10)
        return {
            category: "Very High",
            color: "bg-red-500",
            advice: "Seek shade.",
        };
    return {
        category: "Extreme",
        color: "bg-purple-500",
        advice: "Avoid being outside.",
    };
};


export const getDynamicBackground = (weatherCode, isDay) => {
    if (weatherCode >= 95) {
        return isDay
            ? "from-gray-800 to-gray-900"
            : "from-black to-gray-900";
    }

    if (weatherCode >= 80) {
        return isDay
            ? "from-blue-700 to-blue-900"
            : "from-indigo-900 to-gray-900";
    }

    if (weatherCode >= 51) {
        return isDay
            ? "from-slate-600 to-slate-800"
            : "from-gray-800 to-slate-900";
    }

    if (weatherCode >= 45) {
        return isDay
            ? "from-gray-500 to-gray-700"
            : "from-gray-700 to-gray-900";
    }

    if (weatherCode > 1) {
        return isDay
            ? "from-sky-700 to-sky-900"
            : "from-indigo-800 to-gray-900";
    }

    return isDay
        ? "from-blue-600 to-blue-900"
        : "from-indigo-900 to-black";
};