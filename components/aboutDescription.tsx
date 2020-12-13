import React from 'react'
import AnimationWrapper from './animationWrapper'

const AboutDescription = (props: any) => {
  const {
    image,
    parentClass,
    firstDescription,
    secondDescription,
    title,
    url,
    linkText
  } = props

  return (
    <div className={parentClass}>
      <img src={image} alt="" />
      <h4 className="text-2xl uppercase text-black font-extrabold mb-2" >{title}</h4>
      <AnimationWrapper effect={'fadein'} parentClass="">
        <p className="text-gray-300 font-medium text-1-2 sm:w-full mb-8">{firstDescription}</p>
        {secondDescription && <p className="text-gray-300 font-medium text-1-2 sm:w-full mb-8">{secondDescription}</p>}
        {linkText && <a href={url} className="md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 hover:text-black">{linkText} <span className="arrow">{' > '}</span> </a>}
      </AnimationWrapper>
    </div>

  )

}
export default AboutDescription
