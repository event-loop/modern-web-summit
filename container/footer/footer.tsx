import React from 'react'
import NotifyForm from '../../components/notify'
import FooterLink from '../../components/footerLinks'

const Footer = () => <div className="bg-gray-400 md:p-10 sm:p-5 flex relative flex-wrap">
  <div className="lg:w-2/5 md:w-1/2 sm:w-full justify-center text-center flex-col flex">
    <img className="md:h-20 sm:h-24" src="/images/mws-logo.svg" />
    <div className="mt-10 sm:mb-5 md:mb-0 flex justify-center">
      <NotifyForm buttonClass="sm:text-lg md:text-xl" textClass={'text-white'} />
    </div>
    {/* <div className="mb-10 mt-5 text-center sm:block md:hidden">
      <a className="text-white font-medium text-sm text-opacity-50" href="https://www.google.co.in/">Terms of Service • </a>
      <a className="text-white font-medium text-sm text-opacity-50" href="https://www.google.co.in/">Privacy Policy • </a>
      <a className="text-white font-medium text-sm text-opacity-50" href="https://www.google.co.in/">Code of Conduct</a>
    </div> */}
  </div>
  <div className="lg:w-3/5 md:w-1/2 sm:w-full flex-col flex">
    <FooterLink />
    <div className="md:items-end sm:items-center flex flex-col mt-10 md:mr-12">
      <img className="h-10" src="/images/event-loop-footer.svg" />
      <p className="mt-5 text-gray-200 text-sm">Copyright 2020 Event Loop, Inc.</p>
    </div>
  </div>
</div>

export default Footer
