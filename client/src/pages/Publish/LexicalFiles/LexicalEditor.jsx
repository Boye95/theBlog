import React from 'react'

// Lexical editor imports
import { $getRoot, $getSelection } from 'lexical'
import { useEffect } from 'react'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

// Other plugins
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { AutoScrollPlugin } from '@lexical/react/LexicalAutoScrollPlugin'
import { CharacterLimitPlugin } from '@lexical/react/LexicalCharacterLimitPlugin'
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin'
import { ClearEditorPlugin } from '@lexical/react/LexicalClearEditorPlugin'
// import {CollaborationPlugin} from '@lexical/react/LexicalCollaborationPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { TablePlugin } from '@lexical/react/LexicalTablePlugin'

const theme = {
  // Theme styling goes here
  // ...
}

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange (editorState) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot()
    const selection = $getSelection()

    console.log(root, selection)
  })
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin () {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus()
  }, [editor])

  return null
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError (error) {
  console.error(error)
}

const LexicalEditor = () => {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError
  }

  return (
    <div>
      <div className='w-11/12 mx-auto bg-red-300'>
        <LexicalComposer initialConfig={initialConfig}>
          <HistoryPlugin />
          <MyCustomAutoFocusPlugin />
          {/* <AutoFocusPlugin /> */}
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<div>Write something...</div>}
          />
          {/* <AutoScrollPlugin />
      <CharacterLimitPlugin />
      <CheckListPlugin />
      <ClearEditorPlugin />
      <HashtagPlugin />
      <LinkPlugin />
      <ListPlugin />
      <TablePlugin />
      <PlainTextPlugin /> */}
          <OnChangePlugin onChange={onChange} />
        </LexicalComposer>
      </div>
    </div>
  )
}

export default LexicalEditor
