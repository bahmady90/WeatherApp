
import TableLabel from './TableLabel';
import Days from "./Days"
import TableRow from "./TableRow";



export default function Table({weatherData, handleSetWeatherDayIndex, weatherDayIndex,}) {

  
  const forecast = weatherData?.forecast?.forecastday;
  const selectedDay = forecast?.at(weatherDayIndex);
  const timeNow = new Date().getHours();
  const dayNow = new Date().getDay();
  // Shortening the array of hours, 
  // because otherwise the user would for example see the weather up to 23 
  // hours in the past at first. In that way the user sees only a short part of the "past"
  let selectedHours = [];
  selectedDay?.hour.forEach((hour, index) => {
    if(new Date(selectedDay.date).getDay() === dayNow){
      if(timeNow >= 18){
        if(timeNow - 6 <= index){
          selectedHours.push(hour)
        }
      }
      else {
        if(timeNow - 3 <= index){
          selectedHours.push(hour)
        }
      }
    }
    else {
      selectedHours.push(hour)
    }
    
  })

  return (
    
  <div className='flex items-center flex-col mt-4 sm:mt-8'>
      <Days 
          weatherData={weatherData}
          weatherDayIndex={weatherDayIndex}
          handleSetWeatherDayIndex={handleSetWeatherDayIndex}
        />
      <div className="text-sm text-center sm:text-base w-11/12 sm:w-6/12 rounded-xl  rounded-t-[0px] bg-gray-800">
              <TableLabel/>
              <div>
                {selectedHours.map((hour, index) => {
                  const time = new Date(hour.time).getHours();
                  return (
                    <TableRow 
                    key={index}
                    chance_of_rain={hour.chance_of_rain}
                    chance_of_snow={hour.chance_of_snow}
                    temp={hour.temp_c}
                    wind_kph={hour.wind_kph}
                    icon={hour.condition.icon}
                  >
                    {time} Uhr 
                  </TableRow>
                  ) 
                }  
                )}
              </div>
        </div>
  </div>

  )
}

