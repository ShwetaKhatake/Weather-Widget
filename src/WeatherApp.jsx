import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherInfo(){
    const [WeatherInfo,setWeatherInfo]=useState({
        city:"Shimla",
        feels_like: 24.09,
        humidity: 39,
        temp: 27.58,
        tempMax: 27.58,
        tempMin: 27.58,
        weather: "broken clouds",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(

        <div style={{textAlign:"center"}}>
            <h2>Weather app by Delta</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={WeatherInfo}></InfoBox>
        </div>
    )
}