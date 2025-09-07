import React from "react";

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center h-screen text-white/50">
    <div className="w-16 h-16 border-4 border-t-6 border-t-blue-500 border-pink-200 rounded-full animate-spin flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-t-4 border-t-blue-500 border-pink-200 rounded-full animate-spin" />
    </div>

    <p className="mt-4 text-lg">Fetching Weather Data...</p>
  </div>
);

export default LoadingSpinner;
