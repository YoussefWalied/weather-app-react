import { DateTime } from "luxon";

const API_KEY = '11f55fd7a7232042baf2903445c32c47';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

function getWeatherData(infoType, searchParam) {
    const url = new URL(BASE_URL+infoType);
    url.search= new URLSearchParams({...searchParam,appid:API_KEY});

    return fetch(url).then(response=>response.json());
};

const iconUrl= (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

const formatToLocalTime =(secs,offset,format="cccc, dd, LLL yyyy' | Local time: 'hh:mm a")=>
    DateTime.fromSeconds(secs+ offset,{zone:'utc'}).toFormat(format);


const formatCurrent = (data) => {
    const{
        coord:{lat,lon},
        main:{temp, feels_like,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed},
        timezone,
    }=data;
    
    const {main:details,icon}=weather[0]
    const formattedToLocalTime= formatToLocalTime(dt,timezone)
    
    return{
        name,
        country,
        currentTemp:temp,
        feelsLike:feels_like,
        minTemp:temp_min,
        maxTemp:temp_max,
        humidity,
        details,
        icon:iconUrl(icon),
        sunrise:formatToLocalTime(sunrise,timezone,'hh:mm a'),
        sunset:formatToLocalTime(sunset,timezone,'hh:mm a'),
        speed,
        formattedToLocalTime,
        dt,
        timezone,
        lat,
        lon,
    };
}

const formatForecastWeather=(secs,offset,data)=>{
    //hourly forecast
    const hourly = data
    .filter((f)=>f.dt>secs)
    
    .map((f)=>({
        temp: f.main.temp,
        title: formatToLocalTime(f.dt,offset,'hh:mm a'),
        icon: iconUrl(f.weather[0].icon),
        date: f.dt_txt,
    }))
    .slice(0,5);
    //daily forecast
    const daily = data.filter((f)=>f.dt_txt.slice(-8)==='00:00:00')
    .map(f=>({temp:f.main.temp,
        title: formatToLocalTime(f.dt,offset,'ccc'),
        icon: iconUrl(f.weather[0].icon),
        date: f.dt_txt,
        
    }))

    return {hourly,daily};
}

const getWeatherDataFormatted = async (searchParam) => {

    const formattedCurrentWeather = await getWeatherData('weather',
        searchParam)
        .then(formatCurrent);
    
    const {dt,timezone,lat,lon}=formattedCurrentWeather;    
    const formattedForecastWeather = await getWeatherData('forecast',{lon,lat, units:searchParam.units}).then((d)=>formatForecastWeather(dt,timezone,d.list))    

    return {...formattedCurrentWeather, ...formattedForecastWeather};
};

export default getWeatherDataFormatted;