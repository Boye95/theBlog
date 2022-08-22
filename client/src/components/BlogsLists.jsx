import React from 'react'

import img1 from '../assets/postimages/1.png'
import img2 from '../assets/postimages/2.png'

export default function BlogsLists () {
  return (
    <div className='w-3/5 mx-auto mt-9'>
      <div id='article1' className='flex flex-col items-center'>
        <img src={img1} alt='mainpost' className='w-4/5' />
        <h1 className='font-nylarge w-4/5 text-4xl text-center mt-7'>
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
        <h3 className='font-sfmono text-lg w-3/5 text-center mt-8'>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </h3>
      </div>

      <div id='all__articles' className="w-3/5 border-t-2 mt-7 mx-auto">
        <h3 className="mt-8 text-center font-nylarge text-2xl">All Articles</h3>

        <div id='bloglists' className="mt-7 grid grid-cols-2 gap-6 gap-y-8 mb-20">
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
            <div id='blog' className="text-center">
                <img src={img2} alt="" />
                <p className="font-sfprod mt-4 mx-auto w-11/12">Here are some things you should know regarding how we work</p>
            </div>
        </div>
      </div>
    </div>
  )
}
