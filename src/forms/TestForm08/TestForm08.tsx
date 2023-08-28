import React, { useState } from 'react'
import { TextField } from '@components/TextField'
import { TextArea } from '@components/TextArea'
import { SubmitButton } from '@components/SubmitButton'
import { Label } from '@components/Label'
import { Checkbox } from '@components/Checkbox'
import { config } from '@root/app.config'

export const TestForm08 = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [textArea, setTextArea] = useState('')
  const [activeUser, setActiveUser] = useState(false)
  const [happyUser, setHappyUser] = useState(false)

  return (
    <>
      <h4>
        {config.status} with {config.ui.toolkit}
      </h4>
      <Label>Hello Label</Label>
      <form onSubmit={handleSubmit} style={config.styles.current().formContainer}>
        <TextField
          label={<Label>User Name!</Label>}
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
        <TextArea label="Text Area" value={textArea} onChange={e => setTextArea(e.target.value)} />
        <div style={config.styles.current().formFieldRow}>
          <Checkbox
            label="Active"
            value={activeUser}
            labelPlacement="end"
            singleComponent={true}
            onChange={e => setActiveUser(e.target.value === 'on')}
          />
          <Checkbox
            label="Happy Client"
            value={happyUser}
            labelPlacement="end"
            singleComponent={true}
            onChange={e => setHappyUser(e.target.value === 'on')}
          />
        </div>
        <SubmitButton />
        <SubmitButton>NonDefault</SubmitButton>
      </form>
    </>
  )
}
// Try text area with rows={3}
//               OR   maxRows={6}
