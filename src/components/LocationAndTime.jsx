import React from 'react'

const LocationAndTime = ({weather:{formattedToLocalTime,name,country},}) => {
    return (
        <div>
            <div className='text-white flex items-center justify-center my-6'>
                <p className=' text-xl font-extralight'>
                    {formattedToLocalTime}
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <p className='text-white text-2xl'>
                    {name}, {country}
                </p>
            </div>    
        </div>
    )
}

export default LocationAndTime
