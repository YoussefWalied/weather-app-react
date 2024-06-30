import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities=[
        {
            id:1,
            name:'New York',
        },
        {
            id:2,
            name:'London',
        },
        {
            id:3,
            name:'Sydney',
        },
        {
            id:4,
            name:'Tokyo',
        },
        {
            id:5,
            name:'Paris',
        },
    ]

    return (
        <div className='flex items-center justify-around my-6 text-white'>
            {
                cities.map((city)=>(
                    <button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 py-2 px-3 rounded-md transition ease-in'
                    onClick={()=>setQuery({q:city.name})}>
                        {city.name}
                    </button>
                ))
            }
        </div>
    )
}

export default TopButtons
