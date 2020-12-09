import React from 'react';
import Link from 'next/link'

const StickyHeader = (props) => {
  return <nav className={`flex items-center justify-between fixed top-0 bg-black w-full py-2 px-4 z-40`}>
    <div>
      <input type="image" onClick={() => props.menuOpen()} className="inline cursor-pointer" src="/images/menu-white.svg" alt="menu" />
      <Link href="/"><a><img className="inline cursor-pointer sm:h-8 md:h-10 sm:ml-5 md:ml-10" src="/images/mws-logo.svg" alt="home" /></a></Link>
    </div>
    <a
      className="text-black py-1 px-4 md:mr-10 transition-all duration-200 uppercase border-2 border-lightGreen-200 rounded-md text-1-2 font-extrabold bg-lightGreen-200 hover:text-lightGreen-200 hover:bg-black"
      type="button"  href="https://ti.to/eventloophq/modern-web-conference"
      >
      get tickets 
    </a>
  </nav>
}

export default StickyHeader