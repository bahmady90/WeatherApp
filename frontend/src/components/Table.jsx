
import TableLabel from './TableLabel';
import Days from "./Days"
import TableRow from "./TableRow";



export default function Table({weatherData, handleSetWeatherDayIndex, weatherDayIndex,}) {

  
  const forecast = weatherData?.forecast?.forecastday;
  
  const selectedDay = forecast?.at(weatherDayIndex);
  const selectedHour = selectedDay?.hour;
  
  
  return (
    
  <div className='flex items-center flex-col mt-4'>
      <Days 
          weatherData={weatherData}
          weatherDayIndex={weatherDayIndex}
          handleSetWeatherDayIndex={handleSetWeatherDayIndex}
        />
      <div className={`w-11/12 sm:w-7/12 rounded-xl  rounded-t-[0px] bg-gradient-to-r from-slate-900 to-slate-700 `}>
          <div className="text-sm text-center w-full sm:text-base ">
              <TableLabel/>
              <div>
                {selectedHour.map((hour, index) => 
                  <TableRow 
                    key={index}
                    chance_of_rain={hour.chance_of_rain}
                    chance_of_snow={hour.chance_of_snow}
                    temp={hour.temp_c}
                    wind_kph={hour.wind_kph}
                    icon={hour.condition.icon}
                  >
                    {index} Uhr 
                  </TableRow>
                )}
              </div>
          </div>
      </div>
  </div>

  )
}

