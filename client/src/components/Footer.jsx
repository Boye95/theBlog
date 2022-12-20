import React, { useContext } from 'react'
import Marquee from 'react-fast-marquee'
// import AuthContext from '../AuthContext/Context'
// eror

const Tick = () => {
  return (
    <>
      <Marquee speed={70} gradient={false}>
        <div className='tick flex gap-5 font-sfproth text-2xl whitespace-nowrap sm:pt-2 sm:text-[15.5px]'>
          <span>NEW STORIES</span>
          <span className='font-sfprotr'>EXPRESSION</span>
          <span>UX DESIGN</span>
          <span className='font-sfprotr'>NEW DISCOVERIES</span>
          <span>CREATIVITY</span>
          <span className='font-sfprotr'>STRATEGY</span>
          <span>SOFTWARE DEVELOPMENT</span>
          <span>DIGITAL PRODUCT DESIGN</span>
          <span className='font-sfprotr'>TECHNICAL WRITING</span>
          <span>UX DESIGN</span>
          <span className='font-sfprotr'>NEW STORIES</span>
          <span>CREATIVITY</span>
          <span className='font-sfprotr'>STRATEGY</span>
          <span>SUSPENSE</span>
          <span className='font-sfprotr'>GROWTH</span>
          <span>DIGITAL PRODUCT DESIGN</span>
          <span className='font-sfprotr'>IDEAS</span>
          <span>UX DESIGN</span>
          <span className='font-sfprotr'>NEW DISCOVERIES</span>
          <span>CREATIVITY</span>
          <span className='font-sfprotr'>STRATEGY</span>
          <span>SUSPENSE</span>
          <span className='font-sfprotr mr-2'>GROWTH</span>
        </div>
      </Marquee>
    </>
  )
}

export default function Footer () {
  // const { user } = useContext(AuthContext)
  // const username = user?.data?.registeredUser?.name

  return (
    <footer className='w-full bg-black text-white h-auto pb-4 overflow-hidden'>
      <Tick />
      <div className='mt-24 flex flex-col items-center gap-6 sm:mt-16'>
        <div className='font-zeit text-3xl sm:text-2xl'>
          {/* {user ? username.toUpperCase() : 'ÓNYÉ ŃKÚZÍ'} */}
          ÓNYÉ ŃKÚZÍ
        </div>
        <p className='w-2/6 text-center font-nysmall text-sm ham:w-4/6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
        <div className='flex gap-4 font-sfprotr text-sm [&>*]:underline'>
          <a href='https://www.boyei.tech/' className='hover:no-underline'>
            Web
          </a>
          <a
            href='https://www.linkedin.com/in/samuel-folaranmi-107074214/'
            className='hover:no-underline'
          >
            LinkedIn
          </a>
          <a href='https://github.com/Boye95' className='hover:no-underline'>
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
