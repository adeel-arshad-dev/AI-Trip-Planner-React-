
import { useState, useEffect, useRef } from "react";

export default function LocationAutocomplete({ value, onChange }) {
  const [suggestions, setSuggestions] = useState([]);
  const [selected, setSelected] = useState(false); // 👈 track if selected
  const debounceRef = useRef(null);
  const wrapperRef = useRef(null);

  // Fetch suggestions
  useEffect(() => {
    if (selected) return; // 👈 don't fetch after selection

    if (!value || value.length < 3) {
      setSuggestions([]);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://photon.komoot.io/api/?q=${encodeURIComponent(value)}&limit=5`
        );
        const data = await res.json();

        if (data && data.features) {
          const formatted = data.features.map((f) => {
            const props = f.properties;
            return {
              name: props.name || "",
              city: props.city || props.county || "",
              state: props.state || "",
              country: props.country || "",
            };
          });
          setSuggestions(formatted);
        }
      } catch (err) {
        console.error("Error fetching location:", err);
      }
    }, 400);
  }, [value, selected]);

  // Reset "selected" if user types again
  const handleInputChange = (e) => {
    setSelected(false); // 👈 allow fetching again
    onChange(e.target.value);
  };

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (s) => {
    const display = [s.name, s.city, s.state, s.country]
      .filter(Boolean)
      .join(", ");
    onChange(display);
    setSuggestions([]);
    setSelected(true); // 👈 mark as selected
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter a location"
        className="w-full p-2 border rounded-md"
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded-md shadow-md w-full mt-1 max-h-60 overflow-y-auto">
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(s)}
            >
              {[s.name, s.city, s.state, s.country].filter(Boolean).join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
