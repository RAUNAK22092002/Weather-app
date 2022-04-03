import React, {useEffect} from 'react'

import './styles.css'



// add the link in css to get the weather icons

// @import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css);
const Card = ({
          temp,
  humidity,
  pressure,
  mood,
  name,
  speed,
  country,
  sunset,
    }) => {
          const [weatherState, setWeatheState] = React.useState("");
          useEffect(() => {
    if (mood) {
      switch (mood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

          case "Rain":
              setWeatheState("wi-rain");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [mood]);
    return (
        
        <>
        
        
        <article className="temp">
                   <div className="icon">

       <h1> <i className={`wi ${weatherState}`}></i> </h1>
          </div>
            
                    
                <div className="time">
                <p className="count"><h1>{temp}°C </h1> </p> 
                <p className="count"> {mood}</p>                         
                  <p className="count">{ name}  ,{ country}</p>
                 
              </div>
                      
                      
                      
            <div className="small"> 
                 <div className="i1">
                  <h4>  
                <i className={"wi wi-humidity"}></i>
              </h4>
                  Humidity
                        
                       <p> { humidity} </p>
                      
                </div>
                 
                 <div className="i3">
                <h4>  
                <i className={"wi wi-rain"}></i>
              </h4>
                    Pressure
                       
                       <p> { pressure}</p>
                   
                </div>
                 <div className="i4">
                <h4>  
                <i className={"wi wi-strong-wind"}></i>
              </h4>
                    Wind
                        
                        <p>{speed}</p>
                </div>
              </div>

            </article>
           
       
        </>
    )
}

export default Card
