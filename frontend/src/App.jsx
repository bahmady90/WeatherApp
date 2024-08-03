import {useState, useEffect} from "react";
import { getPosition } from "./functions";

import Loader from "./components/Loader"
import Table from "./components/Table"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TableHeader from "./components/TableHeader";
import Input from "./components/Input";
import Weather from "./components/Weather"



function App() {

  const [isloading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDayIndex, setWeatherDayIndex] = useState(0);
  const [position, setPosition] = useState(null);

  const city = weatherData?.location?.name;
  const country = weatherData?.location?.country;
  const forecast = weatherData?.forecast?.forecastday;
  const selectedDay = forecast?.at(weatherDayIndex);

  
  useEffect(function(){
    async function getCoordinates(){
      setIsLoading(true);
        try{
          const positionObj =  await getPosition();
          const position = {
            lat: positionObj.coords.latitude,
            long: positionObj.coords.longitude,
          };
          setPosition(position);
          setIsLoading(false);
        } catch(err){
          console.log(err.message);
          setIsLoading(false);
        }
        
    }
    getCoordinates();
  },[])

// fetching the weather-data with the position-object
  useEffect(function(){
    async function fetchData(){
      setIsLoading(true);
      try{
        console.log(position);
        const result = await fetch(`https://backend-tau-plum-79.vercel.app/getWeather`, {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({position: position}),
        });
        const data = await result.json();
        setWeatherData(data);
        setIsLoading(false);
      }
      catch(err){
        setError(err.message);
        console.log(error);
        setIsLoading(false);
      }   
    }

    position && fetchData();
  }, [error, setWeatherData, position])
  
  
  if(error) return <h1>{error}</h1>
    
      return (
      <div className="bg-gradient-to-r from-[#d8e9f0] to-[#9bb6c2] h-full">
        <Header/>
        {isloading === true && <div className="w-full h-screen flex items-center justify-center"><Loader/></div>}
        {isloading === false &&
        <>
          <div className=' mb-4 mt-4 flex w-50 sm:w-[100%] items-center justify-center flex-col sm:flex-row sm:gap-x-[10%] lg:gap-x-[10%]'>
            <Input setPosition={setPosition} position={position}/>
          
          {weatherData.length !== 0 &&
            
              <TableHeader city={city} selectedDay={selectedDay} country={country}/>
            
          }
          </div>
          {weatherData.length !== 0 &&
            <>
          <Table 
            position={position}
            setPosition={setPosition}
            weatherData={weatherData}
            weatherDayIndex={weatherDayIndex}
            handleSetWeatherDayIndex={setWeatherDayIndex}
            
          />
        </>
          }

          {weatherData.length === 0 && 
            <Weather/>
          }

        </>  
        }
        <Footer/>
      </div>  
      )
}

export default App;


