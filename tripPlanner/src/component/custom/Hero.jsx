import React from "react";
import Button from "../Button.jsx";
import { Link } from "react-router-dom";
export default function Hero() {

    return (
        <>
            <div className="flex  flex-col content-between mx-60 gap-9 mt-10 items-center">

                <h1 className="font-extrabold text-[30px] text-center">
                   <span className="text-[#f56551]"> Discover Your Adventure With AI:</span> Personalized Itineraries at your Fingertips
                </h1>
                <p>
  Your perosnal trip planner and travelr curator,creating custom itineraries tailored to your interest and budget.
                </p>
                <Link to={'create-trip'} >
                <Button className="w-[160px] ">Get Started:It is free </Button>
                </Link>
            </div>
        </>
    )
}