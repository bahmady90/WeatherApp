
export default function DateButton({firstPart, dayAndMonths, handleSetWeatherDayIndex, index, weatherDayIndex}) {

  function setWeatherDay(index){
    handleSetWeatherDayIndex(index)
  }
  return (
    <button
        onClick={() => setWeatherDay(index)}
        className={`${weatherDayIndex === index && "bg-gradient-to-r from-slate-300 to-slate-500"} flex min-w-10 flex-col basis-full before:justify-center items-center  rounded-lg border-black border-[1px] bg-slate-200`}>
      <p className='font-bold  basis-auto mb-0 '>{firstPart}</p>
      <p className='text-[15px] mt-0 w-max basis-auto'>{dayAndMonths}</p>
    </button>
  )
}
