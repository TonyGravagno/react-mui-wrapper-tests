import React, { useState } from 'react'
import { TextField } from '@components/Library/TextField'
import { TextArea } from '@components/Library/TextArea'
import { SubmitButton } from '@components/Library/SubmitButton'
import { AppConfig } from '@utils/config'

export const TestForm2 = () => {
  const config = AppConfig()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [textArea, setTextArea] = useState('')

  return (
    <>
      <h4>{config.status}</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          type="text"
          disabled
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <TextArea
          label="Text Area2"
          value={textArea}
          onChange={e => setTextArea(e.target.value)}
          // canResize
        />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </>
  )
}
// Try text area with rows={3}
//               OR   maxRows={6}
