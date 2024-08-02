import { getCountryCode } from "../functions";


export default function TableHeader({city, selectedDay, country}) {
  return (
    <div className='flex bg-gradient-to-r from-slate-900 to-slate-700 rounded-full text-white p-2'>
          <div>
            <div className='ml-6 flex gap-2'>
              <p>{city}</p>
              <img className="w-5 h-5" src={`https://flagcdn.com/48x36/${getCountryCode(country)}.png`}></img>
            </div>
            <h2><span className='font-bold text-lg  text-stone-300'>{selectedDay.day.maxtemp_c}°C</span>/{selectedDay.day.mintemp_c}°C</h2>
          </div>
          <img className="" src={`https:${selectedDay.day.condition.icon}`}/>
    </div>
  )
}
