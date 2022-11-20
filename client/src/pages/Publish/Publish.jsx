import React, { useState } from 'react'
import avatar from '../../assets/avatar.png'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown'
import { $generateHtmlFromNodes } from '@lexical/html'
import { IoIosAddCircleOutline } from 'react-icons/io'

import {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  FloatingLinkEditor,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  Divider
} from 'verbum'

// axios and react query
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export default function Publish () {
  const [editorState, setEditorState] = useState()
  const [editorInstance, setEditorInstance] = useState()

  // states for each input in the form
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  // const [body, setBody] = useState('')
  const [displayImage, setDisplayImage] = useState('')
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])
  const [ disable, setDisable ] = useState(false)

  const navigate = useNavigate()
  const fetchTags = async data => {
    const res = await axios.post('http://127.0.0.1:4000/api/blogposts', data)
    return res
  }

  const handleImage = e => {
    const file = e.target.files[0]
    setFileToBase(file)
  }

  const setFileToBase = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setDisplayImage(reader.result)
    }
  }

  let handleChange = (state, instance) => {
    instance.update(() => {
      const markdown = $convertToMarkdownString(TRANSFORMERS)
      const htmlString = $generateHtmlFromNodes(instance, null)
      const json = JSON.stringify(instance)
      // setEditorInstance(markdown)
      setEditorState(json)
      // setEditorInstance(json)
    })
  }
  const { mutate, isLoading } = useMutation(fetchTags)
  const handleSubmit = e => {
    e.preventDefault()
    const post = {
      title,
      subtitle,
      body: editorState,
      displayImage,
      tags
    }
    setDisable(true)
    mutate(post)
    setTitle('')
    setSubtitle('')
    setEditorState('')
    setDisplayImage('')
    setTags([])
    console.log(post)
    navigate('/')
  }

  return (
    <div className='mt-5'>
      <div className='w-full mx-auto flex justify-between px-6 py-4 mb-5 bg-white border-b-4 shadow-xl border-gray-600 fixed top-0 z-10 ham:w-full sm:px-4 '>
        <h1 className='text-xl font-nylarge font-semibold sm:text-[17px]'>
          Tell a Story, Boye.
        </h1>

        <div className='flex gap-3 items-center'>
          <button
            type='submit'
            form='form'
            className='text-white bg-black rounded p-1 font-sfprod px-8 ring-2 ring-gray-700 ring-offset-2 transition hover:bg-gray-600 hover:ring-gray-400 sm:px-4 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={disable}
          >
            Publish
          </button>
          <Link
            to='/'
            className='flex items-center gap-2 bg-gray-300 rounded p-1 transition hover:bg-gray-100'
          >
            <BiArrowBack className='sm:text-2xl' />
            <p className='sm:text-[13px] sm:hidden'>Blog Home</p>
          </Link>
          <Link to='/profile' className='relative '>
            <span className='flex h-3 w-3 absolute -right-2 top-0'>
              <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
            </span>
            <div className='h-8 w-8 cursor-pointer rounded-full overflow-hidden ring ring-gray-600 ring-offset-2 hover:ring-blue-400'>
              <img src={avatar} alt='' className='h-full w-full' />
            </div>
          </Link>
        </div>
      </div>

      <div className='h-screen mt-[9rem] mb-[10rem]'>
        <form
          id='form'
          className='w-[80%] mx-auto ham:w-[95%]'
          encType='multipart/form-data'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col items-center w-full mx-auto'>
            <label
              htmlFor='blogimg'
              className='mb-4 flex items-center justify-center gap-2 font-nylarge cursor-pointer h-[3rem] text-2xl text-white w-full max-w-[1050px] bg-gray-700 ring-gray-700 rounded ring-offset-2 ring-2 border-2 border-gray-700 transition hover:bg-gray-800'
            >
              <IoIosAddCircleOutline className='' />
              <p className='sm:text-xl'>Click to Add Post Image</p>
              <input
                type='file'
                name='displayImage'
                id='blogimg'
                className='hidden'
                onChange={handleImage}
                required
              />
            </label>
            <div className='h-auto rounded mx-auto p-2'>
              {displayImage && (
                <img src={displayImage} alt='blog post display' />
              )}
            </div>
            <div className='flex flex-col w-full gap-2 [&>*]:h-[3rem] [&>*]:outline-none [&>*]:rounded'>
              <input
                type='text'
                name='title'
                id='blogTitle'
                placeholder='Title...'
                className='w-full max-w-[1050px] mx-auto ring-gray-700 ring-offset-2 ring-2 border-2 text-3xl px-3 font-nylarge transition focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px] sm:text-2xl'
                onChange={e => setTitle(e.target.value)}
                required
              />
              <input
                type='text'
                name='subtitle'
                id='blogSubtitle'
                placeholder='Subtitle...'
                className='ring-gray-700 ring-offset-2 ring-2 border-2 w-full max-w-[1050px] mx-auto mt-2 text-2xl px-3 font-sfmono transition focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px] sm:text-xl'
                onChange={e => setSubtitle(e.target.value)}
                required
              />
            </div>
          </div>
          {/* <div className='h-[10rem] bg-gray-700 text-gray-50 rounded mt-4 p-2 overflow-scroll'>
            {editorState}
          </div> */}
          <EditorComposer className='editor-shell'>
            <Editor
              hashtagsEnabled={true}
              emojisEnabled={true}
              actionsEnabled={true}
              placeholder='Say your piece...'
              onChange={handleChange}
            >
              <ToolbarPlugin defaultFontSize='20px' className='toolbar'>
                <FontFamilyDropdown />
                <FontSizeDropdown />
                <Divider />
                <BoldButton />
                <ItalicButton />
                <UnderlineButton />
                <CodeFormatButton />
                <Divider />
                <InsertLinkButton />
                <TextColorPicker />
                <BackgroundColorPicker />
                <TextFormatDropdown />
                <Divider />
                <InsertDropdown
                  enablePoll={true}
                  enableTwitter={true}
                  enableYoutube={true}
                  enableExcalidraw={true}
                  enableHorizontalRule={true}
                  enableEquations={true}
                  enableStickyNote={true}
                />
                <Divider />
                <AlignDropdown />
              </ToolbarPlugin>
            </Editor>
          </EditorComposer>
        </form>
      </div>
    </div>
  )
}
