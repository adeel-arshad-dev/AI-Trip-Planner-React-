
import { useState, useEffect, useRef } from "react";

export default function LocationAutocomplete({ value, onChange, setCoords }) {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState(value);
  const debounceRef = useRef(null);

  // Sync query with parent value
  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  const fetchSuggestions = async (val) => {
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        val
      )}&addressdetails=1&limit=5`;
      const res = await fetch(url);
      const data = await res.json();

      setSuggestions(
        data.map((item) => ({
          name: item.display_name,
          lat: item.lat,
          lon: item.lon,
        }))
      );
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setSuggestions([]);
    }
  };

  const handleSelect = (item) => {
    onChange(item.name);
    setQuery(item.name);
    if (setCoords) setCoords({ lat: item.lat, lon: item.lon });
    setSuggestions([]);
  };

  return (
    <div className="w-full relative">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search for an address..."
        className="border p-2 rounded w-full"
      />
      {suggestions.length > 0 && (
        <ul className="border rounded mt-1 bg-white shadow absolute z-10 w-full max-h-60 overflow-y-auto">
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
