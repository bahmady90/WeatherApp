

export default function TableLabel() {
    
  return (
    
    <div className=" text-lg font-medium text-white w-full flex basis-full justify-between border-b border-t-[1px] " >
            <p className="px-2 py-3 min-w-10">Uhrzeit</p>
            <p className="px-4 py-3 min-w-10">Wetter</p>
            <p className="px-2 py-3 min-w-10">Temp.(°C)</p>
            <p className="px-2 pt-2 min-w-10 text-2xl mr-2">🌧️</p>
            <p className="px-2 pt-2 min-w-10 text-2xl">🌨️</p>
    </div>
  )
}
