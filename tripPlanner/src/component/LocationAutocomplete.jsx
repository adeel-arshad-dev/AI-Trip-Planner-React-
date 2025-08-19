import { useState } from "react";
import './App.css'

export default function LocationAutocomplete({ value, onChange }) {
  const [suggestions, setSuggestions] = useState([]);

  const locationiqKey = "pk.aa7f5d0539c5675b7f3429402939d8fa"; // your API key

  // Fetch suggestions as user types
  const fetchSuggestions = async (val) => {
    onChange(val); // update parent state (input value)

    if (val.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.locationiq.com/v1/autocomplete?key=${locationiqKey}&q=${val}&limit=5&format=json`
      );
      const data = await response.json();

      setSuggestions(
        data.map((item) => ({
          name: item.display_name,
          lat: item.lat,
          lon: item.lon,
        }))
      );
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Handle selection
  const handleSelect = (item) => {
    onChange(item.name); // send selected place to parent
    setSuggestions([]);  // hide dropdown
  };

  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => fetchSuggestions(e.target.value)}
        placeholder="Search for an address..."
        className="border p-2 rounded w-full"
      />

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <ul className="border rounded mt-1 bg-white shadow">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
import './App.css'