import React from 'react'
import Footer from '../footer/footer'
import HeaderWrapper from '../../components/headerWrapper'
import GetInvolved from '../getInvolved'
import privacyPolicyList from '../../utility/privacyPolicy.json'

const PrivacyPolicy = () => <>
  <HeaderWrapper>
  <div className='sm:m-0 md:m-10 md:mt-20'>
    <div className={`bg-white shadow-xs`}>
      <div className="flex sm:flex-wrap lg:flex-no-wrap">
        <div className="bg-black lg:w-23 sm:w-full sm:flex-none pt-20 lg:flex-23 h-32 flex items-end self-start justify-center">
          <h2 className="text-5xl text-white leading-7 uppercase">Privacy Policy</h2>
        </div>
        <div className="flex flex-col p-6 lg:pt-24">
          <h3 className="text-2xl font-extrabold uppercase lg:w-3/4" >{"Privacy Policy PlaceHolder"}</h3>
          {privacyPolicyList.map((p, i) =>
            <React.Fragment key={i}>
              <p className={'text-gray-300 font-medium text-1-2 lg:w-3/4'}>{p}</p>
              <br />
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  </div>
  <div className='sm:m-0 md:m-10'>
    <GetInvolved isVisible={true} />
  </div>
  <Footer />
  </HeaderWrapper>
</>

export default PrivacyPolicy
