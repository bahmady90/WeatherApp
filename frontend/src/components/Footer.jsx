
export default function Footer() {
  return (
    <footer className='bottom-0 mt-[20px] sm:mt-[184px] grid grid-rows-1 grid-cols-2 gap-x-[50%] sm:gap-x-[70%] pl-4 rounded-3xl rounded-b-none top-0  border-[1px] bg-gradient-to-r from-slate-100 to-gray-200 border-black'>
      <p className='self-center text-stone-700 font-bold text-xl'>WetterApp</p>
      <img className="w-12 h-12" src='cloudy.svg'/>
    </footer>
  )
}


