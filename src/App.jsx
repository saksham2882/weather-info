import { useWeather } from "./hooks/useWeather";

import LoadingSpinner from "./components/common/LoadingSpinner";
import ErrorMessage from "./components/common/ErrorMessage";
import SearchBar from "./components/SearchBar";
import Alerts from "./components/Dashboard/Alerts";
import CurrentWeather from "./components/Dashboard/CurrentWeather";
import DailyForecast from "./components/Dashboard/DailyForecast";
import HourlyForecast from "./components/Dashboard/HourlyForecast";
import AdditionalInfo from "./components/Dashboard/AdditionalInfo";
import Footer from "./components/Dashboard/Footer";

export default function App() {
  const {
    weather,
    location,
    loading,
    error,
    isSearching,
    handleSearch,
    fetchWeather,
    backgroundStyle,
    alerts,
  } = useWeather();

  if (loading && !weather) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => fetchWeather(location.lat, location.lon)}
      />
    );
  }

  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-br ${backgroundStyle} text-white font-sans p-4 sm:p-6 lg:p-8 transition-all duration-500 ease-in-out`}
    >
      <header className="mb-4">
        <SearchBar onSearch={handleSearch} isSearching={isSearching} />
      </header>

      {weather && (
        <main className="grid grid-cols-12 gap-6  ">
          <Alerts alerts={alerts} />
          <CurrentWeather weather={weather} locationName={location.name} />
          <DailyForecast data={weather.daily} />
          <HourlyForecast hourlyData={weather.hourly} />
          <AdditionalInfo weather={weather} />
        </main>
      )}

      <Footer />
    </div>
  );
}
