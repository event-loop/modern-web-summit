import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { buttonList, focusableModalElementTypes } from '../utility/constants'

// the approach to keyboard events and focus trapping in the modal is modified 
// from this: https://tinloof.com/blog/how-to-create-an-accessible-react-modal/

const NavMenu = (props: any) => {
  const { menuOpen } = props
  const buttonClass = "menu-btn border-2 mb-5 p-6 border-gray-400 text-center text-xl font-extrabold uppercase text-gray-400 hover:bg-gray-400 hover:text-white"
  const linkClass = "text-1-2 text-gray-300 font-medium hover:text-blue-100"
  const textClass = 'text-1-2 text-gray-300 font-medium'
  const modalRef = useRef(null);
  const startFocus = useRef(null);

  const handleTabKey = e => {
    const focusableModalElements = modalRef.current.querySelectorAll(focusableModalElementTypes);
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];
    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  // 27 is Escape key, if pressed, toggle the modal closed
  const keyListeners = {27: menuOpen, 9: handleTabKey};
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [])
  useEffect(() => {
    // when the modal is open, move keyboard focus to the first interactive menu item.
    startFocus.current.focus();
  }, [startFocus]);
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListeners[e.keyCode];
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  }, []);


  return (
    <div className="bg-white fixed top-0 inset-x-0 z-50 shadow-xs h-screen" ref={modalRef}>
      <div className="p-3 sm:bg-gray-400 md:bg-white">
        <input type="image" alt="close menu" src="/images/close.svg" className="sm:hidden md:inline cursor-pointer" onClick={menuOpen} />
        <input type="image" alt="close menu" src="/images/close-white.svg" className="md:hidden sm:inline cursor-pointer" onClick={menuOpen} />
      </div>
      <div role="dialog" aria-label="navigation menu" aria-modal="true" className="flex sm:flex-wrap md:flex-no-wrap md:w-3/5 sm:w-full mx-auto md:my-10 sm:my-5 sm:pb-40 md:pb-0 overflow-auto max-h-full-100">
        <div className="md:w-2/5 sm:w-full sm:mx-5 md:mx-0">
          {/* <p><Link href="/term-service"><a className={linkClass} >Terms of Service</a></Link> </p> */}
          {/* <p><Link href="/privacy-policy"><a className={linkClass} >Privacy Policy</a></Link></p> */}
          {/* <p><a className={linkClass} href="https://www.google.co.in/">Selection Committee</a></p> */}
          <p className={textClass}>
            {/* <a className={linkClass} href="https://www.google.co.in/"> */}
              Workshops - coming soon
              {/* </a> */}
          </p>
          <p className={textClass}>
            {/* <a className={linkClass} href="https://www.google.co.in/"> */}
            Jobs - coming soon
              {/* </a> */}
          </p>
          <p className={textClass}>Schedule - coming soon</p>
        </div>
        <div className="md:w-1/2 sm:w-full flex flex-col mx-5 sm:order-first md:order-none">
          {buttonList.map((b, i) => <>
            <Link href={`/${b.pageName !== '' ? `#${b.pageName}` : ''}`}>
              <a
                ref={ i ? null : startFocus}
                onClick={() => menuOpen()}
                className={buttonClass}
                >
                {b.label}
              </a>
            </Link>
          </>)}
          <Link href="/code-of-conduct">
            <a
              className={buttonClass}>
              code of conduct
            </a>
          </Link>
          <button
            disabled={true}
            className={`menu-btn cursor-not-allowed border-2 mb-5 p-6 border-gray-400 text-xl font-extrabold uppercase text-gray-400  focus:outline-none opacity-50`}
            type="button" >
            schedule - coming soon
            </button>
        </div>
        <div className="md:w-2/5 sm:w-full sm:mx-5 md:ml-16">
          <p>
            <a className={linkClass} href="https://docs.google.com/forms/d/e/1FAIpQLScxt_u_khXb3AAn7zp8clvpktpWHSmx01pN1N0xtTDvQB5aaA/viewform">
              Volunteer
            </a>
          </p>
          {/* <p className={textClass}>Request for Sponsorship</p> */}
          {/* <p className={textClass}>Convince your boss</p> */}
          <p><a className={linkClass} href="https://docs.google.com/forms/d/e/1FAIpQLSdpEOR83g1-kORQ35n8jMA9Uwz-SsMroR9-KnmaZlIPriYVrQ/viewform">Request for Sponsorship</a></p>
          {/* <p><a className={linkClass} href="https://www.google.co.in/">Convince your boss</a></p> */}
          <p><a className={linkClass} href="https://docs.google.com/forms/d/e/1FAIpQLSd2mAqQAEs1K8HpTs41XcX7u8CpPx975gJ2VJCjE3bjNb-vzQ/viewform?usp=sf_link">Submit a talk proposal</a></p>
        </div>
      </div>
    </div>
  )

}
export default NavMenu