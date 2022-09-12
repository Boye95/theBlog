import React from 'react'
import { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'

export default function Publish () {
  const [value, setValue] = useState('**Hello world!!!**')

  return (
    <div>
      <MDEditor value={value} onChange={setValue} />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  )
}
