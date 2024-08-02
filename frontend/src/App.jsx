import {useState, useEffect} from "react";
import { getPosition } from "./functions";



import Loader from "./components/Loader"
import Table from "./components/Table"
import Header from "./components/Header"
import Footer from "./components/Footer"



function App() {

  const [isloading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherDayIndex, setWeatherDayIndex] = useState(0);
  const [position, setPosition] = useState(null);
  
  
    

  useEffect(function(){
    async function getCoordinates(){
        try{
          const positionObj =  await getPosition();
          const position = {
            lat: positionObj.coords.latitude,
            long: positionObj.coords.longitude,
          };
          setPosition(position);
        } catch(err){
          console.log(err.message);
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
    if(weatherData.length !== 0) return (
      <div className="bg-gradient-to-r from-[#d8e9f0] to-[#9bb6c2]">
        <Header/>
        {isloading === true && <div className="w-full h-screen flex items-center justify-center"><Loader/></div>}
        {(isloading === false && !error) &&
        <Table 
          position={position}
          setPosition={setPosition}
          weatherData={weatherData}
          weatherDayIndex={weatherDayIndex}
          handleSetWeatherDayIndex={setWeatherDayIndex}
          
        />
        }
        <Footer/>
        
      </div>  
    )
  // if(weatherData.length === 0){
  //   return <h1>Wir brauchen einen Standort</h1>
  // }
}

export default App


