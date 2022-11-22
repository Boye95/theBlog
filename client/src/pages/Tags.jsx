import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function Tags () {
  const editorRef = useRef(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  return (
    <div className='w-full min-h-[30rem] max-w-[1050px] font-nymedium rounded-tr-[10px] rounded-tl-[10px] ring-gray-700 ring-offset-2 ring-2 border-2 transition focus-within:border-emerald-300 focus-within:ring-emerald-300 focus-within:shadow-emerald-300 focus-within:shadow-[0_0_25px]'>
      <Editor
        apiKey='mk3t00giiyqt48pkpkk19x5es04efdg6r5b3ndaa4hz5if9k'
        onInit={(evt, editor) => (editorRef.current = editor)}
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
            'wordcount'
          ],
          menubar: 'file edit view insert format tools table help',
          toolbar:
            'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
            toolbar_sticky: true,
          content_style:
            `body { 
              font-family:NY-Medium,sans-serif; 
              font-size:14px;
            }`,
          body_class: 'tiny_body'
        }}
        onEditorChange={(newText) => console.log(newText)}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  )
}
