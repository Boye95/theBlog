import React from 'react'
import { HorizontalTicker } from 'react-infinite-ticker'

let Tick = () => {
  return (
    <>
      <div className='font-sfproth text-2xl whitespace-nowrap '>
        <HorizontalTicker className='flex justify-between gap-8'>
          <div className='mr-2'>DIGITAL PRODUCT DESIGN </div>
          <div className='font-sfprotr mr-2'>REMOTE WORK</div>
          <div className='mr-2'>UX DESIGN</div>
          <div className='font-sfprotr mr-2'>DISTRIBUTED TEAMS</div>
          <div className='mr-2'>CREATIVITY</div>
          <div className='font-sfprotr mr-2'>STRATEGY</div>
          <div className='mr-2'>SUSPENSE</div>
          <div className='font-sfprotr mr-2'>GROWTH</div>
          <div className='mr-2'>DIGITAL PRODUCT DESIGN</div>
          <div className='font-sfprotr mr-2'>REMOTE WORK</div>
          <div className='mr-2'>UX DESIGN</div>
          <div className='font-sfprotr mr-2'>DISTRIBUTED TEAMS</div>
          <div className='mr-2'>CREATIVITY</div>
          <div className='font-sfprotr mr-2'>STRATEGY</div>
          <div className='mr-2'>SUSPENSE</div>
          <div className='font-sfprotr mr-2'>GROWTH</div>
        </HorizontalTicker>
      </div>
    </>
  )
}

export default function Footer () {
  return (
    <footer className='w-full bg-black text-white h-auto pb-4'>
      <Tick />
      <div className='mt-24 flex flex-col items-center gap-6'>
        <div className='font-zeit text-3xl'>ÓNYÉ ŃKÚZÍ</div>
        <p className='w-2/6 text-center font-nysmall text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
        <div className='flex gap-4 font-sfprotr text-sm [&>*]:underline'>
          <a href='#' className='hover:no-underline'>
            Twitter
          </a>
          <a href='#' className='hover:no-underline'>
            LinkedIn
          </a>
          <a href='#' className='hover:no-underline'>
            Github
          </a>
        </div>
        <div className='font-sfprotr text-sm flex flex-col items-center'>
          <span>© 2022 Adeboye Folaranmi</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
