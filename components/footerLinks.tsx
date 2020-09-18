import React from 'react'
import { links } from '../utility/constants'

const FooterLink = () => {
  return (
    <div className="flex flex-wrap">
      {links.map((item, index) => {
        return (
          <div key={index} className="lg:w-1/4 sm:w-1/2 sm:mb-10 md:mb-0">
            {item.link.map((linkData, i) => {
              return (
                <div key={i}>
                  <a href="https://www.google.com/" className="pr-2 capitalize text-white hover:text-blue-100 md:text-opacity-50 sm:text-opacity-1 text-base font-medium">
                    {linkData.title}
                  </a>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default FooterLink
