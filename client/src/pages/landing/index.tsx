import React from 'react'
import { ReactSVG } from 'react-svg'

import LandingSvg from '@/assets/images/landing.svg'

import { Button } from '@/components/ui/button' //  lg:col-span-3

import useBrowserWidth from '@/hooks/useBrowserWidth'

const LandingPage: React.FC<{}> = () => {
  const browserWidth = useBrowserWidth()

  return (
    <div className='bg-tertiary-50 w-full h-full flex lg:grid lg:grid-cols-[2fr_3fr] lg:grid-rows-[1fr] lg:gap-8 lg:grid-flow-row'>
      <div className='flex align-center justify-start '>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold text-6xl leading-[72px] text-primary-500' dangerouslySetInnerHTML={{ __html: "Stay Connected. <br/> Stay Engaged" }} />
          <div className='text-2xl leading-[32px] text-black my-3'>
            Connect. Grow. Succeed. Our Alumni Tracker app bridges personal connections and professional opportunities, empowering alumni to thrive.
          </div>
          <Button onClick={() => window.location.href = '/general-information-signup'} className='w-full lg:w-fit' size='lg'>Sign up here</Button>
        </div>
      </div>
      <>
        {
          browserWidth >= 1024 ? 
          <div className='flex align-center justify-center w-full max-w-full'>
            <ReactSVG className='flex align-center justify-center w-full max-w-full' src={LandingSvg} />
          </div> : ''
        }
      </>
    </div>
  )
}

export default LandingPage