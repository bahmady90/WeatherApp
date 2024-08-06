
export default function Header() {

  
  return (
    <header className='grid grid-cols-[35vw_minmax(20vw,_1fr)] sticky pl-4 rounded-3xl sm:grid-cols-[80vw_minmax(40vw,_1fr)] rounded-t-none top-0  bg-gray-800 border-[1px] border-white'>
      <img className="w-12 h-12" src='weather.svg'/>
      <p className='self-center justify-self-start text-stone-200 font-bold text-xl'>Check das Wetter</p>
    </header>
  )
}