import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import React, { useState } from "react";

const Inputs = ({setQuery,setUnits,units}) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if(city!== '') setQuery({q:city})
    }

    const handleCurrentLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                const {latitude, longitude} = position.coords;
                setQuery({lat:latitude, lon:longitude})
                setError(null);
            }
            ,(err)=>{
                console.error(`Error fetching location: ${err.message}`);
                setError('Error fetching location. Please try again.');}
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            setError('Geolocation is not supported by this browser.');
        }
        
    }

    return (
        <div className="flex flex-row justify-center my-6 text-white">
            <div className="flex flex-row w-3/4 justify-center items-center space-x-4">
                <input
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                type="text" placeholder="Search by City..." className="text-black text-xl font-light w-full shadow-xl capitalize focus:outline-none placeholder:lowercase rounded p-2"/>

                <BiSearch
                onClick={handleSearch}
                size={30} className="text-3xl cursor-pointer transition ease-out hover:scale-125"/>

                <BiCurrentLocation
                onClick={handleCurrentLocation}
                size={30} className="text-3xl cursor-pointer transition ease-out hover:scale-125"/>
            </div>   

            <div className="text-white flex flex-row w-1/4 justify-center items-center space-x-3">
                <button 
                onClick={()=>setUnits("metric")}
                className={`text-2xl font-medium transition ease-out hover:scale-125 ${units === "metric" ? "text-gray-700" : "bg-transparent"}`}>
                    °C
                </button>
                <p className=" text-2xl font-medium mx-1"> |</p>
                <button 
                onClick={()=>setUnits("imperial")}
                className={`text-2xl font-medium transition ease-out hover:scale-125 ${units === "imperial" ? "text-gray-700" : "bg-transparent"}`}>
                    °F
                </button>    
            </div>
            
        </div>


    )
};

export default Inputs