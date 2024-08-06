
export default function DateButton({firstPart, dayAndMonths, handleSetWeatherDayIndex, index, weatherDayIndex}) {

  function setWeatherDay(index){
    handleSetWeatherDayIndex(index)
  }
  return (
    <button
        onClick={() => setWeatherDay(index)}
        className={`${weatherDayIndex === index && " bg-gradient-to-r from-slate-300 to-slate-500 min-w-10 z-10 shadow-sm shadow-white text-xl"} border-black border-t-2 flex cursor-pointer min-w-8 flex-col basis-[30%] items-center rounded-xl bg-gray-100 text-lg hover:text-xl `}>
      <p className='font-bold  basis-auto mb-0 '>{firstPart}</p>
      <p className='mt-0 w-max basis-auto'>{dayAndMonths}</p>
    </button>
  )
}