
export default function Header() {

  
  return (
    <header className='grid grid-cols-[40vw_minmax(20vw,_1fr)] sticky pl-4 rounded-3xl sm:grid-cols-[80vw_minmax(40vw,_1fr)] rounded-t-none top-0  bg-gradient-to-r from-slate-900 to-slate-700 border-[1px] border-white'>
      <img className="w-12 h-12" src='weather.svg'/>
      <p className='self-center justify-self-start text-stone-300 font-bold text-xl'>Check das Wetter ☂️</p>
    </header>
  )
}