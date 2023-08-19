import React from 'react'
import { TextField } from '@components/TextField'
import { SubmitButton } from '@components/SubmitButton'
import { config } from '@root/app.config'

export const TestForm1 = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <>
      <h4>{config.status}</h4>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" type="text" />
        <TextField label="Password" type="password" />
        <SubmitButton />
      </form>
    </>
  )
}
