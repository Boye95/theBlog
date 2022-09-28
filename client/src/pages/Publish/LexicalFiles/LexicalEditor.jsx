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
    <EditorComposer>
      <Editor hashtagsEnabled={true} emojisEnabled={true}>
        <ToolbarPlugin defaultFontSize='20px'>
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
  )
}

export default NoteViewer
