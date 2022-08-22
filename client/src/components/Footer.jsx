import React from 'react'
import Ticker from 'react-ticker'

let Tick = () => {
  return (
    <Ticker speed={10}>
      {({index}) => (
        <>
          <div className='font-sfproth text-2xl whitespace-nowrap flex gap-4'>
            <span>DIGITAL PRODUCT DESIGN</span>
            <span className='font-sfprotr'>REMOTE WORK</span>
            <span>UX DESIGN</span>
            <span className='font-sfprotr'>DISTRIBUTED TEAMS</span>
            <span>CREATIVITY</span>
            <span className='font-sfprotr'>STRATEGY</span>
            <span>SUSPENSE</span>
            <span className='font-sfprotr'>GROWTH #{index}</span>
            <span>DIGITAL PRODUCT DESIGN</span>
            <span className='font-sfprotr'>REMOTE WORK</span>
            <span>UX DESIGN</span>
            <span className='font-sfprotr'>DISTRIBUTED TEAMS</span>
            <span>CREATIVITY</span>
            <span className='font-sfprotr'>STRATEGY</span>
            <span>SUSPENSE</span>
            <span className='font-sfprotr'>GROWTH</span>
          </div>
        </>
      )}
    </Ticker>
  )
}

export default function Footer () {
  return (
    <footer className='w-full bg-black text-white h-96'>
      <Tick />
      <div className='mt-24 flex flex-col items-center gap-6'>
        <div className='font-zeit text-3xl'>ÓNYÉ ŃKÚZÍ</div>
        <p className='w-2/6 text-center font-nysmall text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
        <div className='flex gap-4 font-sfprotr text-sm [&>*]:underline'>
          <a href='#' className='hover:no-underline'>Twitter</a>
          <a href='#' className='hover:no-underline'>LinkedIn</a>
          <a href='#' className='hover:no-underline'>Github</a>
        </div>
        <div className='font-sfprotr text-sm flex flex-col items-center'>
          <span>© 2022 Adeboye Folaranmi</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
