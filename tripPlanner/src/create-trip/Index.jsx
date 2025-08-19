
import Rect from 'react';
import { useState } from "react";

import LocationAutocomplete from "../components/LocationAutocomplete";

export default function Create_trip() {

      const [place, setPlace] = useState("");
    return(
        <>
        <div className='sm:px-10 md:px-32 lg:px-56 kl:px-10 px-5 mt-10 '>
        <h2 className='font-bold text-3xl'>tell Us Your Travel Prefference</h2>
        <p className='text-gray-500 mt-3 text-xl'>
            Just provide some basic information , and our trip planner 
            will generate a customijzed itinerary based on your
             prefference.
        </p>
        <div>
           <div className='mt-10'>
            <h2 className='text-xl my-2 font-medium'>
                What is your destination of choice?
            </h2>
           <LocationAutocomplete value={place} onChange={setPlace} />

      <div className="mt-4 p-3 border rounded bg-gray-50">
        <strong>Selected Place:</strong> {place || "None yet"}
      </div>

           </div>
        </div>

        </div>
        
        </>
        )

}