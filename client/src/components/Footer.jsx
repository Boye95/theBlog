import React from 'react'
import Ticker from 'react-ticker'

export default function Footer () {
  return (
    <footer className='w-full bg-black text-white absolute bottom-0 h-96'>
      <Ticker speed={10} mode={'chain'}>
        {({ index }) => (
          <div className='font-sfproth text-2xl whitespace-nowrap flex'>
            <p>DIGITAL PRODUCT DESIGN</p>
            <p>REMOTE WORK</p>
            <p>UX DESIGN</p>
            <p>DISTRIBUTED TEAMS</p>
            <p>CREATIVITY</p>
            <p>STRATEGY</p>
            <p>SUSPENSE</p>
            <p>GROWTH</p>
            <p>DIGITAL PRODUCT DESIGN</p>
            <p>REMOTE WORK</p>
            <p>UX DESIGN</p>
            <p>DISTRIBUTED TEAMS</p>
            <p>CREATIVITY</p>
            <p>STRATEGY</p>
            <p>SUSPENSE</p>
            <p>GROWTH</p>
            <p>{index}</p>
          </div>
        )}
      </Ticker>
      <div className=''>
        <div className='red'>ÓNYÉ ŃKÚZÍ</div>
        <p className=''>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
        <div className=''>
          <a href='#'>Twitter</a>
          <a href='#'>LinkedIn</a>
          <a href='#'>Github</a>
        </div>
        <div className=''>
          <span>© 2022 Adeboye Folaranmi</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
