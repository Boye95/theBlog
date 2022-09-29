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
    <form className=''>
      <div className=''>
        <div className=''>
          <label htmlFor='blogimg'>
            <input type='file' name='blogimg' id='blogimg' required />
          </label>
          <div className=''>
            <input
              type='text'
              name='blogTitle'
              id='blogTitle'
              placeholder='Title...'
              className=''
              required
            />
            <input
              type='text'
              name='blogSubtitle'
              id='blogSubtitle'
              placeholder='Subtitle...'
              className=''
              required
            />
          </div>
        </div>
      </div>
      <EditorComposer>
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
