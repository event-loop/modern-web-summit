import React from 'react'

const StickyHeader = (props) => {
    return <div className={`flex items-center justify-between fixed top-0 bg-black w-full py-2 px-4 z-40`}>
    <div onClick={() => props.menuOpen()}>
      <img className="inline cursor-pointer" src="/images/menu-white.svg" alt="logo" />
      <img className="inline cursor-pointer sm:h-8 md:h-10 sm:ml-5 md:ml-10" src="/images/mws-logo.svg" alt="logo" />
    </div>
    <button
      className="text-black py-1 px-4 md:mr-10 uppercase border-none rounded-md text-base font-extrabold bg-lightGreen-200 hover:bg-lightGreen-100 focus:outline-none"
      type="button">
      get tickets
    </button>
  </div>
}

export default StickyHeader