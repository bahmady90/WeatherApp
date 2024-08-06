import { getCountryCode } from "../functions";


export default function TableHeader({city, selectedDay, country}) {
  return (
    <div className='flex bg-gray-800 rounded-full text-white p-2'>
          <div>
            <div className='ml-6 flex gap-4'>
              <p className="text-xl">{city}</p>
              <img className="w-8 h-8" src={`https://flagcdn.com/48x36/${getCountryCode(country)}.png`}></img>
            </div>
            <h2 className="pl-4 pb-4 pt-2 text-lg "><span className='font-bold text-xl  text-stone-200'>{selectedDay.day.maxtemp_c}°C</span>/{selectedDay.day.mintemp_c}°C</h2>
          </div>
          <img className="w-20 h-20" src={`https:${selectedDay.day.condition.icon}`}/>
    </div>
  )
}
