import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const INIT_URL="https://cdn.newsapi.com.au/image/v1/7eb0cee3b758b235fddd7220a0adeacb?width=650"
    const  HOT_URL = "https://sm.mashable.com/mashable_sea/photo/default/hot-weather-malaysia_4uxc.jpg"
     const  COLD_URL = "https://tse1.mm.bing.net/th?id=OIP.onVPev7Yp7ZnMVoRXdPzyAHaEo&pid=Api&P=0&h=180"
     const  RAIN_URL = "https://tse2.mm.bing.net/th?id=OIP.0eLQKdbrTCSZcrlxZEcRSAHaE7&pid=Api&P=0&h=180"

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL:info.temp>15? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{info.humidity>80 ? <ThunderstormIcon/>:info.temp>15? <WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <div>Temperature= {info.temp}&deg;C</div>
         <div>Humidity= {info.humidity}</div>
         <div>Min Temp= {info.tempMin}&deg;C</div>
         <div>Max Temp= {info.tempMax}&deg;C</div>
         <div>The weather can be described as= <i>{info.weather}</i></div>
        </Typography>
      </CardContent>

    </Card>

</div>
        </div>
    )
}