import { IoIosAddCircleOutline } from 'react-icons/io'
import { Editor } from '@tinymce/tinymce-react'

export default function PublishByHuman ({
  displayImage,
  handleImage,
  setTitle,
  setSubtitle,
  setBody
}) {
  return (
    <div>
      <div className='flex flex-col items-center w-full mx-auto'>
        {displayImage && (
          <div className='h-[30rem] w-full rounded mx-auto my-2 md:h-[15rem]'>
            <img
              src={displayImage}
              alt='blog post display'
              className='w-full h-full object-cover rounded'
            />
          </div>
        )}
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
      <div
        className='mx-auto mt-7 w-full min-h-[30rem] max-w-[1050px] font-nymedium rounded-tr-[10px] rounded-tl-[10px] 
        ring-gray-700 ring-offset-2 ring-2 border-2 transition focus-within:border-emerald-300 focus-within:ring-emerald-300 focus-within:shadow-emerald-300 focus-within:shadow-[0_0_25px]'
      >
        <Editor
          apiKey={import.meta.env.VITE_TINY_API_KEY}
          // onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue='<p>This is the initial content of the editor.</p>'
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
              'nonbreaking',
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
          onEditorChange={newText => setBody(newText)}
        />
      </div>
    </div>
  )
}
