
import TableLabel from './TableLabel';
import Days from "./Days"
import Input from './Input';
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";


export default function Table({weatherData, handleSetWeatherDayIndex, weatherDayIndex,
  setPosition, position}) {

  
  const forecast = weatherData?.forecast?.forecastday;
  
  const selectedDay = forecast[Number(weatherDayIndex)];
  const selectedHour = selectedDay?.hour;
  const city = weatherData.location.name;
  const country = weatherData.location.country;
  
  

  

  
  return (
    
  <div className='flex items-center flex-col mt-4'>
      <div className='mb-4 flex w-50 sm:w-[60%] items-center justify-center flex-col sm:flex-row sm:gap-x-[20%] lg:gap-x-[30%]'>
        <Input setPosition={setPosition} position={position}/>
        <TableHeader city={city} selectedDay={selectedDay} country={country}/>
      </div>
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

