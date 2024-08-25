

export default function TableLabel() {
    
  return (
    
    <div className=" text-lg font-medium text-white w-full flex basis-full justify-between border-b border-t-[1px] " >
            <p className="pl-2 py-3 min-w-10">Uhrzeit</p>
            <p className=" py-3 min-w-10">Wetter</p>
            <p className=" py-3 min-w-10 pr-2">Temp.</p>
            <p className=" pr-2 pt-2 min-w-10 text-2xl">🌧️</p>
            <p className=" pt-2 min-w-10 text-2xl">🌨️</p>
    </div>
  )
}
