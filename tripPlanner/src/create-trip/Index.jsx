
import React, { useState } from "react";
import LocationAutocomplete from "../component/LocationAutocomplete.jsx";
import { SelectBudgetList, SelectTravelersList } from "../component/constants/Option.jsx";
import Button from "../component/Button.jsx";

export default function Create_trip() {
      let missingFields = [];
  const [form, setform] = useState({});

function handleclick(name, value) {
  setform((prev) => ({
    ...prev,
    [name]: prev[name] === value ? "" : value, // ✅ toggle deselect
  }));
}

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-8 py-5 space-y-6">

      {/* Card 1 - Form */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-5 sm:p-6 md:p-8">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">
          Tell Us Your Travel Preference
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Just provide some basic information, and our trip planner
          will generate a customized itinerary based on your
          preference.
        </p>

        <div className="mt-6 space-y-4">
          {/* Destination Input */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
              What is your destination of choice?
            </h3>
            <LocationAutocomplete 
              value={form.location || ""} 
              onChange={(loc) => handleclick("location", loc)} 
            />
          </div>

          {/* Number Input */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
              How many days do you plan to travel?
            </h3>
            <input
              type="number"
              value={form.days || ""}
              onChange={(e) => handleclick("days", e.target.value)}
              className="w-full border rounded-lg px-3 py-2
                focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              placeholder="Enter number of days"
              min="1"
            />
          </div>

          {/* Display Section */}
          <div className="p-3 sm:p-4 border rounded-lg bg-gray-50 text-gray-700 text-sm sm:text-base">
            <p><strong>Destination:</strong> {form.location || "None yet"}</p>
            <p><strong>Days:</strong> {form.days || "Not set"}</p>
          </div>
        </div>
      </div>

      {/* Budget Section */}
      <div className="w-full max-w-2xl p-4 bg-white shadow-lg rounded-2xl sm:p-5">
        <div className="text-gray-700 font-bold mb-2">What is your budget?</div>
        <p className="text-gray-700 mb-4">
          The budget is exclusively allocated for activities and dining purpose.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 cursor-pointer">
          {SelectBudgetList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleclick("budget", item.title)}
              className={`flex flex-col items-center justify-center border rounded-xl
                p-3 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition
                ${form.budget === item.title ? "border-2 border-blue-500 shadow-lg" : "border-gray-300"}`}
            >
              <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-700 text-sm sm:text-base">{item.title}</div>
              <div className="text-xs text-gray-500 text-center mt-1">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travelers Section */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-4 sm:p-5">
        <h2 className="text-gray-700 font-bold mb-2">
          Who will be your Companion during this journey?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 cursor-pointer">
          {SelectTravelersList.map((pass, index) => (
            <div
              key={index}
              onClick={() => handleclick("companions", pass.people)}
              className={`flex flex-col items-center justify-center border rounded-xl
                p-3 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition
                ${form.companions === pass.people ? "border-2 border-blue-500 shadow-lg" : "border-gray-300"}`}
            >
              <div className="text-xl sm:text-2xl mb-1">{pass.icon}</div>
              <div className="font-semibold text-gray-700 text-sm sm:text-base">{pass.title}</div>
              <div className="text-gray-500 text-xs sm:text-sm text-center">{pass.desc}</div>
              <div className="font-bold text-gray-800 text-sm sm:text-base">{pass.people}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <Button

  onClick={() => {

    if (!form?.location) missingFields.push("Location");
    if (!form?.days) missingFields.push("Days");
    if (!form?.budget) missingFields.push("Budget");
    if (!form?.companions) missingFields.push("companions");

    if (missingFields.length > 0) {
      alert(`Please Check Following Components : ${missingFields.join(", ")} .Thanks!!`);
    } else {
      // ✅ all good, generate trip here
      console.log("Generating trip with:", form);
    }
  }}
>
  Generate Trip
</Button>
      </div>
    </div>
  );
}
