import {dayConverter} from "../functions"
import DateButton from "./DateButton"


export default function Days({weatherData, handleSetWeatherDayIndex, weatherDayIndex}) {


  const {forecast} = weatherData;

  const forecastDays = forecast ? forecast?.forecastday?.filter((day) => day.date) : [];


  return (
    <div className='flex w-11/12 sm:w-6/12 gap-2 justify-center rounded-3xl rounded-b-none bg-gray-800 px-[1px]'>
      {/* //formatting the the dates to make it more readable */}
      {forecastDays.map((el, index) => {
        const date = new Date(el.date);
        const day = date?.toDateString()?.slice(0,3);
        const dayAndMonths = date?.toDateString()?.slice(4,10);
        let firstPart = " ";
        if(index === 0) {firstPart = "Heute";}
        else if(index === 1) {firstPart = "Morgen";}
        else {firstPart = dayConverter(day)}

        
        return <DateButton
            index={index}
            handleSetWeatherDayIndex={handleSetWeatherDayIndex}
            weatherDayIndex={weatherDayIndex}
            key={index} 
            el={el}
            firstPart={firstPart}
            dayAndMonths={dayAndMonths}
          >

        </DateButton>
      }
        
      )}
    </div>
  )
}
