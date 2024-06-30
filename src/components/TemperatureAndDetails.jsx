import { FaThermometerEmpty } from 'react-icons/fa'
import { FaWind } from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import React from 'react'

const TemperatureAndDetails = ({weather:{
    details,
    feelsLike,
    humidity,
    speed,
    sunrise,
    sunset,
    minTemp,
    maxTemp,
    currentTemp,
    icon
},units,
}) => {
    const verticalDetails = [
        {
            id:1,
            Icon: FaThermometerEmpty,
            title: 'Feels like',
            value: `${feelsLike.toFixed()}°`,
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title: 'Humidity',
            value: `${humidity}%`
        },
        {
            id:3,
            Icon: FaWind,
            title: 'Wind',
            value: `${speed} ${units=== "metric" ? "km/s":"m/s"}`
        },
    ];

    const horizontalDetails = [
            {
                id:1,
                Icon: GiSunrise,
                title: 'Sunrise',
                value: `${sunrise}`
            },
            {
                id:2,
                Icon: GiSunset,
                title: 'Sunset',
                value: `${sunset}`
            },
            {
                id:3,
                Icon: MdKeyboardArrowUp,
                title: 'High',
                value: `${maxTemp.toFixed()}°`
            },
            {
                id:4,
                Icon: MdKeyboardArrowDown,
                title: 'Low',
                value: `${minTemp.toFixed()}°`
            },
        ];

    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-white'>
                <p>{details}</p>
            </div>
            <div className='flex flex-row items-center justify-between py-3'>
                    <img src= {icon}
                    alt='weather icon' className='w-20 h-20'
                    />
                    <p className='text-5xl text-white'>{currentTemp.toFixed()}°</p>

                    <div className='flex flex-col items-start space-y-3 text-white'>
                        {
                            verticalDetails.map(({id,Icon,title,value}) => (
                                <div key={id} 
                                className='flex font-light text-sm items-center justify-center'> 
                                    <Icon size={20} className='mr-2 '/>
                                    {`${title}: `}<span className='font-medium ml-1'>{value}</span>
                                </div>
                            )
                            
                            )
                        }
                    </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-14 text-sm text-white py-3'>
                {
                    horizontalDetails.map(({id,Icon,title,value}) => (
                        <div key={id} 
                        className='flex flex-col items-center justify-center text-white'>
                            <Icon size={30} className='mb-2'/>
                            <p className='text-sm font-light'>{title}</p>
                            <p className='text-sm font-medium'>{value}</p>
                        </div>
                    )
                    )
                }
            </div>    

        </div>
    )
}

export default TemperatureAndDetails
