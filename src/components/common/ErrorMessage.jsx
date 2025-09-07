import { AlertTriangle } from "lucide-react";

const ErrorMessage = ({ message, onRetry }) => (
  <div className="flex flex-col items-center justify-center h-screen text-white text-center p-4">

    <AlertTriangle size={48} className="text-orange-300 mb-4" />

    <h2 className="text-2xl font-bold mb-2 text-red-400">Oops! Something went wrong.</h2>

    <p className="text-orange-400 mb-6">{message}</p>

    <button
      onClick={onRetry}
      className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-colors"
    >
      Try Again
    </button>
  </div>
);

export default ErrorMessage;
