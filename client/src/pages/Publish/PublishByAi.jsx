import React, { useState, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export default function PublishByAi ({
  token,
  setDisplayImage,
  setBody,
  body,
  setTitle,
  title,
  setSubtitle,
  subtitle
}) {
  const [imagePrompt, setImagePrompt] = useState('')
  // const [postPrompt, setPostPrompt] = useState('')
  const [topic, setTopic] = useState('')
  const [postLength, setPostLength] = useState('')
  const [postTone, setPostTone] = useState('')

  // console.log(postTone)
  const generateImage = async image => {
    const res = await axios.post('https://theblogxapi.onrender.com/api/blogposts', image, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  }

  const generatePost = async post => {
    const res = await axios.post('https://theblogxapi.onrender.com/api/blogposts', post, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  }

  const {
    mutate: getImage,
    data: image,
    isLoading: imageLoading,
    isError: imageError,
    isSuccess: imageSuccess
  } = useMutation(generateImage, {
    onSuccess: image => {
      // console.log(image)
    }
  })

  const {
    mutate: getPost,
    data: post,
    isLoading: postLoading,
    isError: postError,
    isSuccess: postSuccess
  } = useMutation(generatePost, {
    onSuccess: post => {
      // console.log(post)
    }
  })

  let aiImage = image?.data?.data?.post
  //   console.log(aiImage)
  const handleGenerateImage = e => {
    e.preventDefault()
    const data = {
      imagePrompt
    }
    // console.log(data)
    getImage(data)
  }

  const postPrompt = `Write a well detailed blog post divided into sections with a title and a subtitle with all the necessary html tags\n\nTopic: ${topic}\nLength: ${postLength}\nTone: ${postTone}`
  // console.log(postPrompt)

  const handleGeneratePost = e => {
    e.preventDefault()
    const data = {
      postPrompt
    }
    // console.log(data)
    getPost(data)
  }

  let aiPost = post?.data?.data?.postAi
  //   console.log(aiPost)

  //   slice the first occurence of h1 wrapped text in aiPost
  let getTitle = aiPost?.slice(
    aiPost.indexOf('<h1>') + 4,
    aiPost.indexOf('</h1>')
  )
  //   slice the first occurence of h2 wrapped text in aiPost
  let getSubtitle = aiPost?.slice(
    aiPost.indexOf('<h2>') + 4,
    aiPost.indexOf('</h2>')
  )

  //   console.log(getTitle)
  //   console.log(getSubtitle)

  //   replace the first occurence of h1 and h2 in aiPost with empty string
  aiPost = aiPost?.replace('<h1>' + getTitle + '</h1>', '')
  aiPost = aiPost?.replace('<h2>' + getSubtitle + '</h2>', '')

  //   load text generated by ai into post body at interval
  useEffect(() => {
    setBody(aiPost)
    setTitle(getTitle)
    setSubtitle(getSubtitle)
    setDisplayImage(aiImage)
    // console.log(aiPost)
  }, [aiPost])

  return (
    <div className='flex flex-col items-center w-full mx-auto'>
      {/* form to create blogposts using Open Ai */}
      <div className='w-full flex flex-col gap-4 max-w-[1050px] mx-auto '>
        <div className='flex gap-2 lexical:flex-col'>
          <input
            type='text'
            name='imagePrompt'
            id='imagePrompt'
            placeholder='Write a Prompt for Image...'
            onChange={e => setImagePrompt(e.target.value)}
            className='w-5/6 ring-gray-700 ring-offset-2 border-2 text-xl px-3 font-nylarge transition 
                rounded-sm h-[3rem] lexical:w-full lexical:text-lg
                focus:border-violet-300 focus:ring-violet-300 focus:shadow-violet-300 focus:shadow-[0_0_15px] sm:text-2xl'
            required
          />
          <button
            type='submit'
            onClick={handleGenerateImage}
            className={`w-1/6 font-nysmall flex items-center justify-center h-[3rem] border-2 border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]
            disabled:cursor-not-allowed ham:w-2/6 lexical:w-full`}
            disabled={imageLoading || !imagePrompt}
          >
            {imageLoading ? (
              <svg
                className='inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
            ) : (
              'Generate Image'
            )}
          </button>
        </div>

        {aiImage && (
          <div className='h-[30rem] w-full rounded mx-auto my-2 md:h-[15rem]'>
            <img
              src={aiImage}
              alt='blog post display'
              className='w-full h-full object-cover rounded'
            />
          </div>
        )}

        {/* input element to generate post title */}
        <div className='flex gap-2 lg:grid lg:grid-cols-3 lexical:grid-cols-2'>
          <input
            type='text'
            name='postTopic'
            id='postTopic'
            placeholder='Your topic...'
            onChange={e => setTopic(e.target.value)}
            className='w-5/6 h-[3rem] ring-gray-700 ring-offset-2 text-xl px-3 border-2 rounded border-gray-500  font-nylarge transition 
                focus:border-violet-300 focus:ring-violet-300 focus:shadow-violet-300 focus:shadow-[0_0_15px] sm:text-2xl
                lg:w-full lg:col-span-3 lexical:col-span-2 lexical:text-lg'
            required
          />
          {/* select element for post tone */}
          <select
            name='tone'
            id='tone'
            value={postTone}
            onChange={e => setPostTone(e.target.value)}
            className='w-1/6 h-[3rem] ring-gray-700 ring-offset-2 text-xl px-3 border-2 rounded border-gray-500  font-nylarge transition
                focus:border-violet-300 focus:ring-violet-300 focus:shadow-violet-300 focus:shadow-[0_0_15px] sm:text-2xl
                lg:w-full lg:col-span-1 lexical:col-span-1 lexical:text-base'
            required
          >
            <option value=''>Tone</option>
            <option value='friendly'>Friendly</option>
            <option value='informal'>Informal</option>
            <option value='formal'>Formal</option>
            <option value='interview'>Interview</option>
            <option value='academic'>Academic</option>
            <option value='business'>Business</option>
            <option value='scientific'>Scientific</option>
          </select>

          {/* select element for post length */}
          <select
            name='length'
            id='length'
            value={postLength}
            onChange={e => setPostLength(e.target.value)}
            className='w-1/6 h-[3rem] ring-gray-700 ring-offset-2 text-xl px-3 border-2 rounded border-gray-500  font-nylarge transition
                    focus:border-violet-300 focus:ring-violet-300 focus:shadow-violet-300 focus:shadow-[0_0_15px] sm:text-2xl
                    lg:w-full lg:col-span-1 lexical:col-span-1 lexical:text-base'
            required
          >
            <option value=''>Length</option>
            <option value='short'>Short</option>
            <option value='medium'>Medium</option>
            <option value='long'>Long</option>
          </select>

          <button
            onClick={handleGeneratePost}
            className='w-1/6 font-nysmall flex items-center justify-center h-[3rem] border-2 border-violet-700 shadow-[5px_5px_0px_0px_rgba(109,40,217)]
              disabled:cursor-not-allowed
              lg:w-full lg:col-span-1 lexical:col-span-2'
            disabled={postLoading || !topic || !postTone || !postLength}
          >
            {postLoading ? (
              <svg
                className='inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
            ) : (
              'Generate Post'
            )}
          </button>
        </div>

        <div className='mt-3 flex flex-col w-full gap-2 [&>*]:h-[3rem] [&>*]:outline-none [&>*]:rounded'>
          <input
            type='text'
            name='title'
            id='blogTitle'
            value={title}
            placeholder='Title...'
            className='w-full max-w-[1050px] mx-auto ring-gray-700 ring-offset-2 border-2 text-3xl px-3 font-nylarge 
            transition focus:border-violet-300 focus:ring-violet-300 focus:shadow-violet-300 focus:shadow-[0_0_15px] sm:text-2xl'
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            type='text'
            name='subtitle'
            id='blogSubtitle'
            value={subtitle}
            placeholder='Subtitle...'
            className='ring-gray-700 ring-offset-2 border-2 w-full max-w-[1050px] mx-auto mt-2 text-2xl px-3 font-sfmono 
            transition focus:border-violet-300 focus:ring-violet-300 focus:shadow-violet-300 focus:shadow-[0_0_15px] sm:text-xl'
            onChange={e => setSubtitle(e.target.value)}
            required
          />
        </div>

        {/* generate post body using ai */}
        <div
          className='flex flex-col gap-3 mx-auto mt-7 p-2 w-full min-h-[30rem] max-w-[1050px] font-nymedium rounded-tr-[10px] rounded-tl-[10px] 
        ring-gray-700 ring-offset-2 border-2 border-gray-500 transition focus-within:border-violet-300 focus-within:ring-violet-300 
        focus-within:shadow-violet-300 focus-within:shadow-[0_0_25px]'
        >
          <Editor
            apiKey={import.meta.env.VITE_TINY_API_KEY}
            // onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue='<p>AI results go here...</p>'
            value={body}
            init={{
              height: 500,
              // menubar: false,
              plugins: [
                'advlist',
                'media',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
                'emoticons',
                'template',
                'save',
                'pagebreak',
                'codesample',
                'directionality',
                'visualchars',
                'nonbreaking'
              ],
              menubar: 'file edit view insert format tools table help',
              toolbar:
                'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
              toolbar_sticky: true,
              content_style: `body { 
            font-family:NY-Medium,sans-serif; 
            font-size:14px;
          }`,
              body_class: 'tiny_body'
            }}
            onEditorChange={newText => {
              setBody(newText)
              //   setPostBody(newText)
            }}
          />
        </div>
      </div>
    </div>
  )
}
