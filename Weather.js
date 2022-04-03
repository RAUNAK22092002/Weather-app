import React, {useState, useEffect} from "react";
import Card from './card.js';

import "./styles.css";



const Weather = () => {
    const [searchItems, setSearchItems] = useState("bilaspur");
    const [info, setInfo] = useState({});
    const getinfo = async() => {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchItems}&units=metric&appid=e23c078586a301db704bc1db2dff25c0`
                let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            const {temp, humidity, pressure}= data.main;
            const { main: mood } = data.weather[0];
            const { name } = data;
            const{ speed }= data.wind;
            const { country} = data.sys;

            const weatherinfo = {
                temp,
                humidity,
                pressure,
                mood,
                name,
                speed,
                country,
                
            };
            setInfo(weatherinfo);
            // background.style.color = "red";
           
        
        
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getinfo();
    }, []);
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search..."
                        value={searchItems}
                        onChange={(e)=>setSearchItems(e.target.value)}/>
                    
                    <button className="btn" onClick={getinfo}> Search</button>
                </div>
                </div>

                  
            
       
         <Card {...info}/>
        </>
    )
}

export default Weather;
