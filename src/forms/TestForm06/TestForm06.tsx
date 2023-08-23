import React, { useState } from 'react'
import { TextField } from '@components/TextField'
import { TextArea } from '@components/TextArea'
import { SubmitButton } from '@components/SubmitButton'
import { Label } from '@components/Label'
import { config } from '@root/app.config'

export const TestForm06 = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [textArea, setTextArea] = useState('')

  return (
    <>
      <h4>{config.status}</h4>
      <Label>Hello Label</Label>
      <form onSubmit={handleSubmit}>
        <TextField
          label={<Label>UserName</Label>}
          type="text"
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
        <TextArea label="Text Area" value={textArea} onChange={e => setTextArea(e.target.value)} />
        <SubmitButton />
        <SubmitButton>NonDefault</SubmitButton>
      </form>
    </>
  )
}
// Try text area with rows={3}
//               OR   maxRows={6}
