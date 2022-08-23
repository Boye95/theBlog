import React from 'react'

import eyes from '../assets/eyes.svg'
import img1 from '../assets/postimages/1.png'
import avatar from '../assets/avatar.png'
import inpostimg from '../assets/inpostimgs/1.png'
import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa'

export default function BlogPost () {
  return (
    <div className=''>
      <div id='article1' className='flex flex-col items-center'>
        <h1 className='font-nylarge w-3/6 text-4xl text-center mt-7'>
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
        <h3 className='font-sfmono text-lg w-2/5 text-center mt-8'>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </h3>
        <img src={img1} alt='mainpost' className='mt-8' />
      </div>

      <div className='mt-8 w-3/6 border-t-2 border-black mx-auto'>
        <div id='postinfo' className='mt-8 flex'>
          <div className='flex gap-2 w-3/6'>
            <img src={avatar} alt='' className='w-12 rounded-3xl' />
            <div className=''>
              <h4 className='font-sfproth'>ADEBOYE FOLARANMI</h4>
              <div className='font-sfprotr'>
                <span>Apr 15, 2022 </span>
                <span>· 4 min read</span>
              </div>
            </div>
          </div>
          <div className='flex w-3/6 justify-end items-center gap-2'>
            <div className='border-2 rounded py-1 w-16'>
              <FaFacebookSquare className='w-8 h-6 mx-auto' />
            </div>
            <div className='border-2 rounded py-1 w-16'>
              <FaTwitterSquare className='w-8 h-6 mx-auto' />
            </div>
          </div>
        </div>

        <div id='postcontent' className='mt-16'>
          <p className='font-nymedium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. lectus.
          </p>
          <p className='mt-4 font-nymedium'>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
            molestie, molestie lectus eu, semper Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Aliquam
            quis posuere ligula. In eu dui molestie, molestie lectus eu, semper
          </p>
          <h3 className='mt-4 font-sfprod'>Next on the pipeline</h3>
          <p className='font-nymedium mt-4'>
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur
            auctor metus, id mollis lorem pellentesque id. Nullam posuere
            maximus dui et fringilla.
          </p>
          <p className='font-nymedium mt-4'>
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi
            efficitur auctor metus, id mollis lorem pellentesque id. Nullam
            posuere maximus dui et fringilla.
          </p>
          <div className='mt-6'>
            <img src={inpostimg} alt='' />
            <p className='w-3/5 mt-2 mx-auto text-center'>
              Image caption centered this way and I'll make this a bit longer to
              indicate the amount of line-height.
            </p>
          </div>
          <p className='font-nymedium mt-4'>
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur
            auctor metus, id mollis lorem pellentesque id. Nullam posuere
            maximus dui et fringilla.
          </p>
          <p className='font-nymedium mt-4'>
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi
            efficitur auctor metus, id mollis lorem pellentesque id. Nullam
            posuere maximus dui et fringilla.
          </p>

          <div className='mt-8 font-nymedium'>
            <p className=''>A list looks like this:</p>
            <ul className='list-disc ml-4 leading-9'>
              <li>First item in the list</li>
              <li>Second item in the list posuere maximus dui et fringilla</li>
              <li>Third item in the list</li>
            </ul>
          </div>
          <p className='font-nymedium mt-4'>
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi
            efficitur auctor metus
          </p>
          <div className='font-nymedium mt-4'>
            <p className=''>Thanks for reading,</p>
            <p className=''>Boye</p>
          </div>

          <div className='mt-8 flex w-full items-center gap-2'>
            <div className='border-2 rounded py-2 w-3/6 flex justify-center font-sfprotr'>
              <FaFacebookSquare className='w-8 h-6' />
              <p className=''>Share on Facebook</p>
            </div>
            <div className='border-2 rounded py-2 w-3/6 flex justify-center font-sfprotr'>
              <FaTwitterSquare className='w-8 h-6' />
              <p className=''>Share on Twitter</p>
            </div>
          </div>

          <div className='font-sfprotr mt-7'>
            Tags: product, design, culture
          </div>

          <div className='mt-9 border-t-2 border-dotted border-black'>
            <div className='mt-4 flex items-center gap-4'>
              <img src={avatar} alt='' className='w-16 rounded-3xl' />
              <p className='font-nymedium'>
                <span className='font-sfproth'>ADEBOYE FOLARANMI</span> is a
                Design Founder & Advisor, Berlin School of Creative Leadership
                Executive MBA participant, Zippie advisor, Wolt co-founder, and
                Nordic Rose stakeholder.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative'>
        <p className='mt-24 h-1 w-full bg-red-400'></p>
        <img src={eyes} alt="" className='absolute -top-7 inset-x-2/4' />
      </div>
    </div>
  )
}
