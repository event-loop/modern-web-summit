import React from 'react'
import Title from '../../components/title'
import SponsorDescription from '../../components/sponsorDescription'
import SponsorText from '../../components/sponsorText'
import { sponsorList } from '../../utility/constants'

const Sponsor = () => {
  return (
    <div className="bg-white shadow-xs">
      <div className="flex sm:flex-wrap md:flex-no-wrap">
        <div className="bg-black md:w-23 sm:w-full sm:flex-none md:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7">SPONSOR</h4>
        </div>
        <div className="flex flex-col p-6 sm:text-center md:text-left">
          <h5 className="text-2xl font-extrabold uppercase" >{"Innovation at its Finest"}</h5>
          <p className="text-gray-300 font-medium text-base">{"APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking ideas and services. In addition to providing financial support of the event, Sponsors have their own track for Expo sessions that dive deep into these ideas. From presentations and panels to breakout discussions & workshops, you can get up close with the companies, products, and tools that most interest you."}</p>
          <button className="custom-btn focus:outline-none mt-10 w-full sm:inline md:hidden" type="button">See the sponsorship guide</button>
          <img className="mt-20 mb-5 sm:inline md:hidden" src="/images/org-eventloop.svg" alt=""/>
        </div>
      </div>


      <div className="p-10 sm:hidden md:block">
        <Title title="Presenting sponsor" parentClass="flex justify-center border-solid border" />
        <SponsorDescription
          descriptionClass=""
          innerClass="md:w-1/2 sm:w-full pt-10 pb-20"
          description={
            'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking products and services. In addition to providing financial support of the event, Sponsors have their own track.'}
          parentClass="flex justify-center text-center"
          image="/images/flexport.svg"
        />

        <Title title="Diamond sponsors" parentClass="flex justify-center border-solid border" />
        <div className="flex pt-10 pb-20 justify-around">
          <SponsorDescription
            descriptionClass=""
            innerClass="text-center"
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass="w-1/4"
            image="/images/course-hero.svg"
          />
          <SponsorDescription
            descriptionClass=""
            innerClass="text-center"
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. '}
            parentClass="w-1/4"
            image="/images/facebook.svg"
          />
        </div>

        {sponsorList.map(({ list, parentClass, imageClass, title }, index) => {
          return (
            <div key={index}>
              <Title title={title} parentClass="flex justify-center border-solid border" />
              <div className={parentClass}>
                {list.map(({ image }, index) => {
                  return (
                    <SponsorText
                      key={index}
                      image={image}
                      parentClass={`${title == 'Silver sponsors' ? 'w-1/4 mb-10 text-center' : 'w-1/4 mb-3 text-center'}`}
                      imageClass={imageClass}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}

        <div>
          <Title title="Event organizer" parentClass="flex justify-center border-solid border" />
          <SponsorDescription
            descriptionClass=""
            innerClass="w-1/2 pt-10 pb-20"
            description={
              'APIs & tools that improve the developer experience. Platforms for streamlined collaborative work. Technologies that empower every member of your organization, and make for a better user experience. Sponsors of the Modern Web Summit are building interesting, sustainable, and forward-thinking products and services. In addition to providing financial support of the event, Sponsors have their own track.'}
            parentClass="flex justify-center text-center"
            image="/images/eventloop.svg"
          />
        </div>
      </div>
    </div>
  )
}
export default Sponsor