import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown'
import { $generateHtmlFromNodes } from '@lexical/html'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { FC } from 'react'

// axios and react query
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

// axios query
const postBlog = async data => {
  const res = await axios.post('http://127.0.0.1:4000/api/blogposts', data)
  return res.data
}

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

const NoteViewer = () => {
  const [editorState, setEditorState] = useState()
  const [editorInstance, setEditorInstance] = useState()

  // states for each input in the form
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  // const [body, setBody] = useState('')
  const [displayImage, setDisplayImage] = useState('')
  const [tags, setTags] = useState([])

  const mutation = useMutation(postBlog)

  const handleMutation = (e) => {
    e.preventDefault()
    console.log({
      title,
      subtitle,
      body: editorState,
      displayImage,
    })
    mutation.mutate({
      title,
      subtitle,
      body: editorState,
      displayImage,
      // tags
    })
  }

  let handleChange = (state, instance) => {
    // setEditorInstance(instance)
    // console.log(editorState)
    // console.log(state)
    // console.log(instance)
    instance.update(() => {
      const markdown = $convertToMarkdownString(TRANSFORMERS)
      const htmlString = $generateHtmlFromNodes(instance, null)
      const json = JSON.stringify(instance)
      // setEditorInstance(markdown)
      setEditorState(json)
      // setEditorInstance(json)
    })
  }

  return (
    <form
      className='w-[80%] mx-auto ham:w-[95%]'
      encType='multipart/form-data'
      onSubmit={handleMutation}
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
            name='blogimg'
            id='blogimg'
            className='hidden'
            onChange={e =>
              setDisplayImage(URL.createObjectURL(e.target.files[0]))
            }
            required
          />
        </label>
        <div className='h-[10rem] bg-emerald-500 text-gray-50 rounded mt-4 p-2 overflow-scroll'>
          {displayImage && <img src={displayImage} alt='blog post display' />}
        </div>
        <div className='flex flex-col w-full gap-2 [&>*]:h-[3rem] [&>*]:outline-none [&>*]:rounded'>
          <input
            type='text'
            name='blogTitle'
            id='blogTitle'
            placeholder='Title...'
            className='w-full max-w-[1050px] mx-auto ring-gray-700 ring-offset-2 ring-2 border-2 text-3xl px-3 font-nylarge transition focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px] sm:text-2xl'
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            type='text'
            name='blogSubtitle'
            id='blogSubtitle'
            placeholder='Subtitle...'
            className='ring-gray-700 ring-offset-2 ring-2 border-2 w-full max-w-[1050px] mx-auto mt-2 text-2xl px-3 font-sfmono transition focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px] sm:text-xl'
            onChange={e => setSubtitle(e.target.value)}
            required
          />
        </div>
      </div>
      <div className='h-[10rem] bg-gray-700 text-gray-50 rounded mt-4 p-2 overflow-scroll'>
        {editorState}
      </div>
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

      <button
        className='mb-4 flex items-center justify-center gap-2 font-nylarge cursor-pointer h-[3rem] text-2xl text-white w-full max-w-[1050px] bg-gray-700 ring-gray-700 rounded ring-offset-2 ring-2 border-2 border-gray-700 transition hover:bg-gray-800'
        type='submit'
      >
        Publish
      </button>
    </form>
  )
}

export default NoteViewer
