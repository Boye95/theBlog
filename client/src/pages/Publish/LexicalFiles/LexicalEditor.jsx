import { FC } from 'react'
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
  return (
    <form className='w-[80%] mx-auto'>
      <div className='flex flex-col items-center w-full mx-auto'>
        <label htmlFor='blogimg' className='mb-4'>
          <input type='file' name='blogimg' id='blogimg' required />
        </label>
        <div className='flex flex-col w-full gap-2 [&>*]:h-[3rem] [&>*]:outline-none [&>*]:rounded'>
          <input
            type='text'
            name='blogTitle'
            id='blogTitle'
            placeholder='Title...'
            className='w-full max-w-[1050px] mx-auto ring-gray-700 ring-offset-2 ring-2 border-2 text-3xl px-3 font-nylarge transition focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px]'
            required
          />
          <input
            type='text'
            name='blogSubtitle'
            id='blogSubtitle'
            placeholder='Subtitle...'
            className='ring-gray-700 ring-offset-2 ring-2 border-2 w-[98%] max-w-[1000px] mx-auto mt-2 text-2xl px-3 font-sfmono transition focus:border-emerald-300 focus:ring-emerald-300 focus:shadow-emerald-300 focus:shadow-[0_0_15px]'
            required
          />
        </div>
      </div>
      <EditorComposer className='editor-shell'>
        <Editor
          hashtagsEnabled={true}
          emojisEnabled={true}
          placeholder='Say your piece...'
        >
          <ToolbarPlugin defaultFontSize='20px' className='toolbar'>
            <FontFamilyDropdown />
            <FontSizeDropdown />
            <Divider />
            <BoldButton />
            <ItalicButton />
            <UnderlineButton />
            <CodeFormatButton />
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
  )
}

export default NoteViewer