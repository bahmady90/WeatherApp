

export default function TableLabel() {
    
  return (
    <div className=" font-medium text-white w-full flex basis-full justify-between border-b border-t-[1px] " >
            <p className="px-4 py-3 min-w-10">Zeit</p>
            <p className="px-4 py-3 min-w-10">Wetter</p>
            <p className="px-2 py-3 min-w-10">Temp.(°C)</p>
            <p className="px-2 py-2 min-w-10 text-lg mr-4">🌧️</p>
            <p className="px-2 py-2 min-w-10 text-lg">🌨️</p>
    </div>
  )
}
