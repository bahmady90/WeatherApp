
import TableElement from './TableElement';


export default function TableRow({chance_of_rain, chance_of_snow, temp, children, icon}) {
  return (
    <div className=' border-b items-center flex basis-full w-full justify-between text-white hover:text-base sm:hover:text-lg hover:font-semibold'>
        <div className=" px-2 py-4 font-medium whitespace-nowrap min-w-10 ">
            {children}
        </div>
        <img src={`https:${icon}`} className='w-10 h-10 min-w-10'/>
        <TableElement>{temp}</TableElement>
        <TableElement>{chance_of_rain === 0 ? "-" : `${chance_of_rain}%`}</TableElement>
        <TableElement>{chance_of_snow === 0 ? "-" : `${chance_of_snow}%`}</TableElement>
        
    </div>
  )
}
