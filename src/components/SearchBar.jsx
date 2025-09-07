import { useState, useRef } from "react";
import { Search } from "lucide-react";
import { fetchCitySuggestions } from "../api/weatherService";

const SearchBar = ({ onSearch, isSearching }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimeoutRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(async () => {
      if (value.length > 2) {
        try {
          const fetchedSuggestions = await fetchCitySuggestions(value);
          setSuggestions(fetchedSuggestions);
        } catch (error) {
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
      }
    }, 300);
  };

  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion.name);
    setSuggestions([]);
    onSearch(suggestion.name, suggestion.latitude, suggestion.longitude);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      onSearch(query.trim());
      setSuggestions([]);
    }

    setShowSuggestions(false);
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md mx-auto search-bar-container"
    >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a city..."
        className="w-full pl-12 pr-4 py-3 bg-white/30 text-white placeholder-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
      />

      <button
        type="submit"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
        disabled={isSearching}
      >
        <Search />
      </button>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white/90 backdrop-blur-sm text-gray-800 rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto">

          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion.name}
              {suggestion.admin1 && `, ${suggestion.admin1}`}
              {suggestion.country && `, ${suggestion.country}`}
            </li>
          ))}
          
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
