import React from 'react'
import AnimationWrapper from './animationWrapper'

const AboutDescription = (props: AboutDescriptionProps) => {
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
      <img src={image} />
      <p className="text-2xl uppercase text-black font-extrabold mb-2" >{title}</p>
      <AnimationWrapper effect={'fadein'} parentClass="">
        <p className="text-gray-300 font-medium text-base sm:w-full mb-8">{firstDescription}</p>
        {secondDescription && <p className="text-gray-300 font-medium text-base sm:w-full mb-8">{secondDescription}</p>}
        {linkText && <a href={url} className="md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 hover:text-blue-100 ">{linkText} <span className="arrow">{' > '}</span> </a>}
      </AnimationWrapper>
    </div>

  )

}
export default AboutDescription

type AboutDescriptionProps = {
  title: string
  image: string,
  parentClass: string,
  firstDescription: string,
  secondDescription: string,
  linkText: string,
  url: string
}
