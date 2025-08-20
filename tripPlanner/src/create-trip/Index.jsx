import React, { useState } from "react";
import LocationAutocomplete from "../component/LocationAutocomplete.jsx";
import { SelectBudgetList, SelectTravelersList } from "../component/constants/Option.jsx";

export default function Create_trip() {
  const [place, setPlace] = useState("");
  const [days, setDays] = useState(""); // state for number input

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-13 sm:px-20 py-5 space-y-3">

      {/* Card 1 */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Heading */}
        <h2 className="font-bold text-xl sm:text-2xl text-gray-800">
          Tell Us Your Travel Preference
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Just provide some basic information, and our trip planner
          will generate a customized itinerary based on your
          preference.
        </p>

        {/* Form Section */}
        <div className="mt-6 space-y-4">
          {/* Destination Input */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
              What is your destination of choice?
            </h3>
            <LocationAutocomplete value={place} onChange={setPlace} />
          </div>

          {/* Number Input */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
              How many days do you plan to travel?
            </h3>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              className="w-full border rounded-lg px-3 py-2
               focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              placeholder="Enter number of days"
              min="1"
            />
          </div>

          {/* Display Section */}
          <div className="p-3 sm:p-4 border rounded-lg bg-gray-50 text-gray-700 text-sm sm:text-base">
            <p><strong>Destination:</strong> {place || "None yet"}</p>
            <p><strong>Days:</strong> {days || "Not set"}</p>
          </div>
        </div>
      </div>

      {/* Card 2 (example new divs) */}
      <div className="w-full  max-w-2xl text-white rounded-2xl p-6">
       <div className="text-gray-700 font-bold"> What is your budget?</div>
        <p className="text-gray-700"> The budget is exclusively allocated for activities and dining purpose.</p>

        <div className="grid grid-cols-3 gap-4 p-4">
          {
            SelectBudgetList.map((item, index) => (
              <div className="flex flex-col items-center justify-center border rounded-xl
                   p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition"
                key={index}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-700">{item.title}</div>
                <div className="text-xs text-gray-500 text-center mt-1">{item.desc}</div>
              </div>
            ))
          }
        </div>
      </div>

      <div>
        <h2 className="text-gray-700">
          Who will be your Companion during this journey?
        </h2>
      {
        SelectTravelersList.map((pass,index)=>(
          <div key={index}
          className="grid grid-cols-3 gap-4 p-4 items-center justify-center border rounded-xl
                   p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition"
          >
              <h2>{ pass.icon}</h2>
              <h2 className="font-semibold text-gray-700">{pass.title}</h2>
              <h2 className="text-gray-500 text-center mt-1">{pass.desc}</h2>
              <h2 className="text-gray-500 text-center mt-1">{pass.people}</h2>
          </div>
        ))
      }
      </div>
    </div>
  );
}
