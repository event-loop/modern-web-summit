import React, { useEffect, useState } from 'react'
import Title from '../../components/title'
import SponsorDescription from '../../components/sponsorDescription'
import SponsorText from '../../components/sponsorText'
import { sponsorList } from '../../utility/constants'
import AnimationWrapper from '../../components/animationWrapper'

const Sponsor = (props: VisibleProps) => {
  const { isVisible } = props
  const [className, setClass] = useState('')
  useEffect(() => {
    if (isVisible) {
      setClass('animated fadeInUp opacity-1')
    }
  })

  return (
    <div className={`bg-white shadow-xs opacity-0  ${className}`}>
      <div className="flex sm:flex-wrap lg:flex-no-wrap">
        <div className="bg-black lg:w-23 sm:w-full sm:flex-none lg:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7 uppercase">SPONSORS</h4>
        </div>

        <div className="flex flex-col p-6 sm:text-center lg:text-left lg:pt-24">
          <h5 className="text-2xl font-extrabold uppercase" >{"Innovation at its Finest"}</h5>
          <p className="text-gray-300 font-medium text-base lg:w-3/4 sm:w-full">{"APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking ideas and services. In addition to providing financial support of the event, Sponsors have their own track for Expo sessions that dive deep into these ideas. From presentations and panels to breakout discussions & workshops, you can get up close with the companies, products, and tools that most interest you."}</p>
        </div>
      </div>

      <div className="p-10">
        {/* <Title title="Presenting sponsor" parentClass="flex justify-center border-solid border border-gray-200" />
        <AnimationWrapper parentClass="">
          <SponsorDescription
            imageClass="opacity-75 hover:opacity-100"
            descriptionClass=""
            innerClass="lg:w-1/2 sm:w-full pt-10 pb-20"
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking products and services. In addition to providing financial support of the event, Sponsors have their own track.'}
            parentClass="flex justify-center text-center"
            image="/images/flexport.svg"
          />
        </AnimationWrapper>
        <Title title="Diamond sponsors" parentClass="flex justify-center border-solid border border-gray-200" />
        <AnimationWrapper parentClass="flex pt-10 pb-20 justify-evenly sm:flex-wrap md:flex-no-wrap">
          <SponsorDescription
            imageClass="sponsor-img"
            descriptionClass=""
            innerClass="text-center"
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass="sm:w-full md:w-1/2 lg:w-1/4 sm:mb-10 md:mb-0 md:p-5 lg:p-0"
            image="/images/course-hero.svg"
          />
          <SponsorDescription
            imageClass="sponsor-img"
            descriptionClass=""
            innerClass="text-center"
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass="sm:w-full md:w-1/2 lg:w-1/4 sm:mb-10 md:mb-0 md:p-5 lg:p-0"
            image="/images/facebook.svg"
          />
        </AnimationWrapper>

        {sponsorList.map(({ list, parentClass, imageClass, title }, index) => {
          return (
            <div key={index}>
              <Title title={title} parentClass="flex justify-center border-solid border border-gray-200" />
              <AnimationWrapper parentClass={parentClass}>
                {list.map(({ image }, index) => {
                  return (
                    <SponsorText
                      key={index}
                      image={image}
                      parentClass={`${title == 'Silver sponsors' ? 'sm:w-1/2 lg:w-1/6 mb-10 text-center' : 'sm:w-1/2 lg:w-1/4 mb-3 text-center'}`}
                      imageClass={imageClass}
                    />
                  )
                })}
              </AnimationWrapper>
            </div>
          )
        })} */}
        <div className="text-center pb-10">
        <AnimationWrapper parentClass="">
          <p
            className="uppercase text-gray-300 mb-5 tracking-widest-43 font-extrabold">
            sponsor the web event of the year</p>
            </AnimationWrapper>
            <AnimationWrapper parentClass="" effect={'fadeIn'}>
          <div className="inline-block bg-lightGreen-200 transition-all duration-200 transform -rotate-1 hover:rotate-0">
            <button
              className="transition-all duration-200 transform rotate-1 hover:rotate-0 bg-white hover:bg-gray-400 text-gray-400 hover:text-lightGreen-200 py-4 px-6 uppercase border-2 border-gray-400 text-xl font-extrabold focus:outline-none"
              type="button">
              Register Interest
                  </button>
          </div>
          </AnimationWrapper>
        </div>
        <div>
          <Title title="Event organizer" parentClass="flex justify-center border-solid border border-gray-200" />
          <AnimationWrapper parentClass="">
            <SponsorDescription
              imageClass="sponsor-img"
              descriptionClass=""
              innerClass="sm:w-full lg:w-1/2 py-10"
              description={
                'EventLoop is a platform for online-first meetups and conferences. We provide event organizers, speakers, sponsors, and attendees with an unrivaled online event experience. We can’t wait to show you what we’re about at the Modern Web Summit!'}
              parentClass="flex justify-center text-center"
              image="/images/eventloop.svg"
            />
            
          </AnimationWrapper>
        </div>
      </div>
    </div>
  )
}
export default Sponsor

export type VisibleProps = {
  isVisible: boolean
}
