// import React, { useState } from "react";
// import LocationAutocomplete from "../component/LocationAutocomplete.jsx";
// import { SelectBudgetList, SelectTravelersList } from "../component/constants/Option.jsx";

// export default function Create_trip() {
//   const [place, setPlace] = useState("");
//   const [days, setDays] = useState(""); // state for number input

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-13 sm:px-20 py-5 space-y-3">

//       {/* Card 1 */}
//       <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
//         {/* Heading */}
//         <h2 className="font-bold text-xl sm:text-2xl text-gray-800">
//           Tell Us Your Travel Preference
//         </h2>
//         <p className="text-gray-600 mt-2 text-sm sm:text-base">
//           Just provide some basic information, and our trip planner
//           will generate a customized itinerary based on your
//           preference.
//         </p>

//         {/* Form Section */}
//         <div className="mt-6 space-y-4">
//           {/* Destination Input */}
//           <div>
//             <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
//               What is your destination of choice?
//             </h3>
//             <LocationAutocomplete value={place} onChange={setPlace} />
//           </div>

//           {/* Number Input */}
//           <div>
//             <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
//               How many days do you plan to travel?
//             </h3>
//             <input
//               type="number"
//               value={days}
//               onChange={(e) => setDays(e.target.value)}
//               className="w-full border rounded-lg px-3 py-2
//                focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
//               placeholder="Enter number of days"
//               min="1"
//             />
//           </div>

//           {/* Display Section */}
//           <div className="p-3 sm:p-4 border rounded-lg bg-gray-50 text-gray-700 text-sm sm:text-base">
//             <p><strong>Destination:</strong> {place || "None yet"}</p>
//             <p><strong>Days:</strong> {days || "Not set"}</p>
//           </div>
//         </div>
//       </div>

//       {/* Card 2 (example new divs) */}
//       <div className="w-full  max-w-2xl text-white rounded-2xl p-6">
//        <div className="text-gray-700 font-bold"> What is your budget?</div>
//         <p className="text-gray-700"> The budget is exclusively allocated for activities and dining purpose.</p>

//         <div className="grid grid-cols-3 gap-4 p-4">
//           {
//             SelectBudgetList.map((item, index) => (
//               <div className="flex flex-col items-center justify-center border rounded-xl
//                    p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition"
//                 key={index}>
//                 <div className="text-3xl mb-2">{item.icon}</div>
//                 <div className="font-semibold text-gray-700">{item.title}</div>
//                 <div className="text-xs text-gray-500 text-center mt-1">{item.desc}</div>
//               </div>
//             ))
//           }
//         </div>
//       </div>

//       <div>
//         <h2 className="text-gray-700">
//           Who will be your Companion during this journey?
//         </h2>
//         <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          
//       {
//         SelectTravelersList.map((pass,index)=>(
//           <div key={index}
//           className=" items-center justify-center border rounded-xl
//           p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition"
//           >
//               <div>{ pass.icon}</div>
//               <div className="font-semibold text-gray-700">{pass.title}</div>
//               <div className="text-gray-500 ">{pass.desc}</div>
//               <div className=" text-bold text-gray-800 ">{pass.people}</div>
//           </div>
//         ))
//       }
//       </div>
//       </div>
//     </div>
//   );
// }


// gemini


// import React, { useState } from "react";
// import LocationAutocomplete from "../component/LocationAutocomplete.jsx";
// import { SelectBudgetList, SelectTravelersList } from "../component/constants/Option.jsx";

// export default function Create_trip() {
//   const [place, setPlace] = useState("");
//   const [days, setDays] = useState("");
//   const [selectedBudget, setSelectedBudget] = useState(null);
//   const [selectedTraveler, setSelectedTraveler] = useState(null);

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4 sm:p-6 md:p-8 space-y-8">

//       {/* Main Form Card */}
//       <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-10">
//         <h2 className="font-bold text-2xl sm:text-3xl text-gray-800 text-center">
//           Tell Us Your Travel Preference
//         </h2>
//         <p className="text-gray-600 mt-2 text-sm sm:text-base text-center max-w-lg mx-auto">
//           Just provide some basic information, and our trip planner will generate a customized itinerary based on your preference.
//         </p>

//         {/* Form Section */}
//         <div className="mt-8 space-y-6">
//           <div>
//             <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2">
//               What is your destination of choice?
//             </h3>
//             <LocationAutocomplete value={place} onChange={setPlace} />
//           </div>

//           <div>
//             <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-2">
//               How many days do you plan to travel?
//             </h3>
//             <input
//               type="number"
//               value={days}
//               onChange={(e) => setDays(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base
//                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//               placeholder="Enter number of days"
//               min="1"
//             />
//           </div>

//           <div className="p-4 sm:p-5 border border-gray-200 rounded-lg bg-gray-50 text-gray-700 text-sm sm:text-base">
//             <p className="font-semibold"><strong>Destination:</strong> <span className="font-normal">{place || "None yet"}</span></p>
//             <p className="font-semibold mt-1"><strong>Days:</strong> <span className="font-normal">{days || "Not set"}</span></p>
//           </div>
//         </div>
//       </div>
      
//       {/* Budget and Travelers Section */}
//       <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 md:p-8 lg:p-10 space-y-6">
//         {/* Budget Section */}
//         <div>
//           <h3 className="font-bold text-xl sm:text-2xl text-gray-800">What is your budget?</h3>
//           <p className="text-gray-600 mt-1 text-sm sm:text-base">The budget is exclusively allocated for activities and dining purposes.</p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
//             {SelectBudgetList.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => setSelectedBudget(item.id)}
//                 className={`flex flex-col items-center justify-center border-2 rounded-xl p-4 cursor-pointer 
//                   transition-all duration-200 ${
//                     selectedBudget === item.id 
//                       ? 'border-blue-500 bg-blue-50' 
//                       : 'border-gray-200 bg-gray-50 hover:border-gray-300'
//                   }`}
//               >
//                 <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
//                 <div className="font-semibold text-gray-700 text-center">{item.title}</div>
//                 <div className="text-xs text-gray-500 text-center mt-1">{item.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Travelers Section */}
//         <div>
//           <h3 className="font-bold text-xl sm:text-2xl text-gray-800">Who will be your Companion during this journey?</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
//             {SelectTravelersList.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => setSelectedTraveler(item.id)}
//                 className={`flex flex-col items-center justify-center border-2 rounded-xl p-4 cursor-pointer
//                   transition-all duration-200 ${
//                     selectedTraveler === item.id
//                       ? 'border-blue-500 bg-blue-50'
//                       : 'border-gray-200 bg-gray-50 hover:border-gray-300'
//                   }`}
//               >
//                 <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
//                 <div className="font-semibold text-gray-700 text-center">{item.title}</div>
//                 <div className="text-xs text-gray-500 text-center mt-1">{item.desc}</div>
//                 <div className="text-xs font-semibold text-gray-800 text-center mt-1">{item.people}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import LocationAutocomplete from "../component/LocationAutocomplete.jsx";
// import { SelectBudgetList, SelectTravelersList } from "../component/constants/Option.jsx";

// export default function Create_trip() {
//   const [place, setPlace] = useState("");
//   const [days, setDays] = useState(""); 
//   const[form,setform]=useState([])

//   function handleclick(name,value){

//     setform({
//       ...form,
//       [name]:value,
//     })
//   }
//   useEffect(()=>{
//    console.log(form);
//   },[form] )

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-8 py-5 space-y-6">

//       {/* Card 1 - Form */}
//       <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-5 sm:p-6 md:p-8">
//         <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">
//           Tell Us Your Travel Preference
//         </h2>
//         <p className="text-gray-600 mt-2 text-sm sm:text-base">
//           Just provide some basic information, and our trip planner
//           will generate a customized itinerary based on your
//           preference.
//         </p>

//         <div className="mt-6 space-y-4">
//           {/* Destination Input */}
//           <div>
//             <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
//               What is your destination of choice?
//             </h3>
//             <LocationAutocomplete value={place} onChange={handleclick("location",place)} />
//           </div>

//           {/* Number Input */}
//           <div>
//             <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
//               How many days do you plan to travel?
//             </h3>
//             <input
//               type="number"
//               value={days}
//               onChange={(e)=>handleclick(days,e)}
//               className="w-full border rounded-lg px-3 py-2
//                focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
//               placeholder="Enter number of days"
//               min="1"
//             />
//           </div>

//           {/* Display Section */}
//           <div className="p-3 sm:p-4 border rounded-lg bg-gray-50 text-gray-700 text-sm sm:text-base">
//             <p><strong>Destination:</strong> {place || "None yet"}</p>
//             <p><strong>Days:</strong> {days || "Not set"}</p>
//           </div>
//         </div>
//       </div>

//       {/* Card 2 - Budget */}
//       <div className="w-full max-w-2xl rounded-2xl p-4 sm:p-5">
//         <div className="text-gray-700 font-bold mb-2">What is your budget?</div>
//         <p className="text-gray-700 mb-4">
//           The budget is exclusively allocated for activities and dining purpose.
//         </p>

//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 cursor-pointer">
//           {SelectBudgetList.map((item, index) => (
//             <div
//               className="flex flex-col items-center justify-center border rounded-xl
//                  p-3 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition"
//               key={index}
//                onClick={handleclick("budget",item.title)}
//             >
//               <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
//               <div className="font-semibold text-gray-700 text-sm sm:text-base">{item.title}</div>
//               <div className="text-xs text-gray-500 text-center mt-1">
//                 {item.desc}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Card 3 - Travelers */}
//       <div className="w-full max-w-2xl rounded-2xl p-4 sm:p-5">
//         <h2 className="text-gray-700 font-bold mb-2">
//           Who will be your Companion during this journey?
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//           {SelectTravelersList.map((pass, index) => (
//             <div
//               key={index}
//                onCli={handleclick("companions",pass.people)}
//               className="flex cursor-pointer flex-col items-center justify-center border rounded-xl
//               p-3 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition"
//             >
//               <div className="text-xl sm:text-2xl mb-1">{pass.icon}</div>
//               <div className="font-semibold text-gray-700 text-sm sm:text-base">{pass.title}</div>
//               <div className="text-gray-500 text-xs sm:text-sm text-center">{pass.desc}</div>
//               <div className="font-bold text-gray-800 text-sm sm:text-base">{pass.people}</div>
//             </div>
//           ))}
//         </div>
//       </div>

      
//     </div>
//   );
// }


//updated code 
import React, { useEffect, useState } from "react";
import LocationAutocomplete from "../component/LocationAutocomplete.jsx";
import { SelectBudgetList, SelectTravelersList } from "../component/constants/Option.jsx";

export default function Create_trip() {
  const [place, setPlace] = useState("");
  const [days, setDays] = useState(""); 
  const [form, setform] = useState({});

  function handleclick(name, value) {
    setform({
      ...form,
      [name]: value,
    });
  }

  function handleLocationChange(location) {
    setPlace(location);
    handleclick("location", location);
  }

  function handleDaysChange(e) {
    const newDays = e.target.value;
    setDays(newDays);
    handleclick("days", newDays);
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
              value={place} 
              onChange={handleLocationChange} 
            />
          </div>

          {/* Number Input */}
          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
              How many days do you plan to travel?
            </h3>
            <input
              type="number"
              value={days}
              onChange={handleDaysChange}
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

      {/* Card 2 - Budget */}
      <div className="w-full max-w-2xl rounded-2xl p-4 sm:p-5">
        <div className="text-gray-700 font-bold mb-2">What is your budget?</div>
        <p className="text-gray-700 mb-4">
          The budget is exclusively allocated for activities and dining purpose.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 cursor-pointer">
          {SelectBudgetList.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center border rounded-xl
                   p-3 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition"
              key={index}
              onClick={()=>handleclick("budget",item.title)}
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

      {/* Card 3 - Travelers */}
      <div className="w-full max-w-2xl rounded-2xl p-4 sm:p-5">
        <h2 className="text-gray-700 font-bold mb-2">
          Who will be your Companion during this journey?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {SelectTravelersList.map((pass, index) => (
            <div
              key={index}
              onClick={()=>handleclick("companions",pass.people)}
              className="flex cursor-pointer flex-col items-center justify-center border rounded-xl
              p-3 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition"
            >
              <div className="text-xl sm:text-2xl mb-1">{pass.icon}</div>
              <div className="font-semibold text-gray-700 text-sm sm:text-base">{pass.title}</div>
              <div className="text-gray-500 text-xs sm:text-sm text-center">{pass.desc}</div>
              <div className="font-bold text-gray-800 text-sm sm:text-base">{pass.people}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}