
// import { useState, useEffect, useRef } from "react";

// export default function LocationAutocomplete({ value, onChange, setCoords }) {
//   const [suggestions, setSuggestions] = useState([]);
//   const [query, setQuery] = useState(value);
//   const debounceRef = useRef(null);

//   // Sync query with parent value
//   useEffect(() => {
//     setQuery(value);
//   }, [value]);

//   useEffect(() => {
//     if (query.length < 3) {
//       setSuggestions([]);
//       return;
//     }

//     if (debounceRef.current) clearTimeout(debounceRef.current);
//     debounceRef.current = setTimeout(() => {
//       fetchSuggestions(query);
//     }, 300);

//     return () => {
//       if (debounceRef.current) clearTimeout(debounceRef.current);
//     };
//   }, [query]);

//   const fetchSuggestions = async (val) => {
//     try {
//       const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//         val
//       )}&addressdetails=1&limit=5`;
//       const res = await fetch(url);
//       const data = await res.json();

//       setSuggestions(
//         data.map((item) => ({
//           name: item.display_name,
//           lat: item.lat,
//           lon: item.lon,
//         }))
//       );
//     } catch (err) {
//       console.error("Error fetching suggestions:", err);
//       setSuggestions([]);
//     }
//   };

//   const handleSelect = (item) => {
//     onChange(item.name);
//     setQuery(item.name);
//     if (setCoords) setCoords({ lat: item.lat, lon: item.lon });
//     setSuggestions([]);
//   };

//   return (
//     <div className="w-full relative">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => {
//           setQuery(e.target.value);
//           onChange(e.target.value);
//         }}
//         placeholder="Search for an address..."
//         className="border p-2 rounded w-full"
//       />
//       {suggestions.length > 0 && (
//         <ul className="border rounded mt-1 bg-white shadow absolute z-10 w-full max-h-60 overflow-y-auto">
//           {suggestions.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => handleSelect(item)}
//               className="p-2 hover:bg-gray-200 cursor-pointer"
//             >
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// import { useState, useEffect, useRef } from "react";

// export default function LocationAutocomplete({ value = "", onChange }) {
//   const [suggestions, setSuggestions] = useState([]);
//   const [query, setQuery] = useState(value);
//   const [hasSelected, setHasSelected] = useState(false);
//   const debounceRef = useRef(null);

//   // Build "City, Province, Country" safely from Nominatim address fields
//   const labelFromAddress = (addr = {}) => {
//     const city =
//       addr.city ||
//       addr.town ||
//       addr.village ||
//       addr.municipality ||
//       addr.suburb ||
//       addr.hamlet ||
//       addr.county; // fallback if no city
//     const region =
//       addr.state || addr.province || addr.region || addr.state_district || addr.county;
//     const country = addr.country;
//     const parts = [city, region, country].filter(Boolean);
//     return parts.join(", ");
//   };

//   useEffect(() => {
//     setQuery(value || "");
//   }, [value]);

//   useEffect(() => {
//     if (hasSelected) return;

//     if (debounceRef.current) clearTimeout(debounceRef.current);

//     if (!query || query.trim().length < 3) {
//       setSuggestions([]);
//       return;
//     }

//     debounceRef.current = setTimeout(async () => {
//       try {
//         const res = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=8&q=${encodeURIComponent(
//             query.trim()
//           )}`
//         );
//         const data = await res.json();

//         // Map to compact labels and de-duplicate identical labels
//         const seen = new Set();
//         const mapped = [];
//         for (const item of data) {
//           const label = labelFromAddress(item.address) || item.display_name;
//           if (!seen.has(label)) {
//             seen.add(label);
//             mapped.push({
//               id: item.place_id,
//               label,
//             });
//           }
//         }
//         setSuggestions(mapped);
//       } catch (e) {
//         console.error(e);
//         setSuggestions([]);
//       }
//     }, 350);

//     return () => clearTimeout(debounceRef.current);
//   }, [query, hasSelected]);

//   const handleSelect = (opt) => {
//     onChange(opt.label);
//     setQuery(opt.label);
//     setSuggestions([]);
//     setHasSelected(true); // lock: don't refetch until user edits
//   };

//   const handleInput = (e) => {
//     const v = e.target.value;
//     setQuery(v);
//     onChange("");        // parent cleared until a suggestion is chosen
//     setHasSelected(false);
//   };

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         value={query}
//         onChange={handleInput}
//         placeholder="Search for a location"
//         className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />

//       {suggestions.length > 0 && !hasSelected && (
//         <ul className="absolute z-10 bg-white border rounded-lg w-full mt-1 max-h-52 overflow-y-auto shadow-md">
//           {suggestions.map((s) => (
//             <li
//               key={s.id}
//               onClick={() => handleSelect(s)}
//               className="px-3 py-2 cursor-pointer hover:bg-blue-100"
//             >
//               {s.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function LocationAutocomplete({ value, onChange }) {
  const [suggestions, setSuggestions] = useState([]);
  const debounceRef = useRef(null);
  const wrapperRef = useRef(null);

  // Fetch suggestions
  useEffect(() => {
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
  }, [value]);

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
    onChange(display);  // update parent state
    setSuggestions([]); // clear dropdown
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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

