const Mobile_Menu = ({menuIsOpen}) => {
  return (
    <div className={`${menuIsOpen === true ? "opacity-100 z-40" : "opacity-0 -z-10"} transition-[250ms] fixed w-full h-full top-0 bg-black z-30 bg-opacity-30 place-items-center sm:p-12 pl-6 pr-6 pt-24 pb-12 overflow-y-auto`}>
      <ul className={`${menuIsOpen === true ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} text-black min-h-fit rounded-xl bg-white transition-[500ms] origin-top`}>
        <li className='p-7 font-medium text-2xl'>
          <a href="https://cerri-webdev.com">About</a>
        </li>
        <li className='p-7 font-medium text-2xl border-t-[1px] border-b-[1px]'>
          <a href="https://cerri-webdev.com">Discover</a>
        </li>
        <li className='p-7 font-medium text-2xl'>
          <a href="https://cerri-webdev.com">Get Started</a>
        </li>
      </ul>
    </div>
  )
}

export default Mobile_Menu