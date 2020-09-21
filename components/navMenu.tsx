import React, { useEffect } from 'react'
import Link from 'next/link'
import {buttonList} from '../utility/constants'

const NavMenu = (props: any) => {
  const { menuOpen, handleButtonClick } = props
  const buttonClass = "menu-btn border-2 mb-5 p-6 border-gray-400 text-xl font-extrabold uppercase text-gray-400 hover:bg-gray-400 focus:outline-none hover:text-white"
  const linkClass = "text-base text-gray-300 font-medium hover:text-blue-100"

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [])

  const onButtonClick = (pageName: string) => {
    if (handleButtonClick) {
      handleButtonClick(pageName)
    } else {
      setTimeout(() => {
        const pageRef = document.getElementById(pageName)
        pageRef.scrollIntoView()
      }, 500)
    }
  }
  

  return (
    <div className="bg-white fixed top-0 inset-x-0 z-50 shadow-xs h-screen">
      <div className="p-3 sm:bg-gray-400 md:bg-white">
        <img src="/images/close.svg" className="sm:hidden md:inline cursor-pointer" onClick={menuOpen} />
        <img src="/images/close-white.svg" className="md:hidden sm:inline cursor-pointer" onClick={menuOpen} />
      </div>
      <div className="flex md:w-3/5 sm:w-full mx-auto md:my-10 sm:my-5">
        <div className="w-1/4 sm:hidden md:block">
          <p><Link href="/term-service"><a className={linkClass} >Terms of Service</a></Link> </p>
          <p><Link href="/privacy-policy"><a className={linkClass} >Privacy Policy</a></Link></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Selection Committee</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Workshops</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Jobs</a></p>
        </div>
        <div className="md:w-2/5 sm:w-full flex flex-col mx-5">
          {buttonList.map(b => <>
            {!handleButtonClick && <Link href="/">
            <button
              onClick={() => onButtonClick(b.pageName)}
              className={buttonClass}
              type="button" >
              {b.label}
            </button>
          </Link> || <button
            onClick={() => onButtonClick(b.pageName)}
            className={buttonClass}
            type="button" >
              {b.label}
            </button>}
          </>)}
          <Link href="/code-of-conduct">
            <button
              className={buttonClass}
              type="button" >
              code of conduct
            </button>
          </Link>
          <button
            disabled={true}
            onClick={() => handleButtonClick('home')}
            className={`border-2 mb-5 p-6 border-gray-400 text-xl font-extrabold uppercase text-gray-400  focus:outline-none opacity-50`}
            type="button" >
            schedule - coming soon
            </button>
        </div>
        <div className="w-1/4 ml-16 sm:hidden md:block">
          <p><a className={linkClass} href="https://www.google.co.in/">Volunteer</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Request for Sponsorship</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Apply for Scholarship</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Convince your boss</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Submit a talk proposal</a></p>
        </div>
      </div>
    </div>
  )

}
export default NavMenu