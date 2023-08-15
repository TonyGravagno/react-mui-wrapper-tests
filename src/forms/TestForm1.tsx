import React from 'react'
import { TextField } from '@components/TextField'
import { SubmitButton } from '@components/SubmitButton'
import { AppConfig } from '@utils/config'

const TestForm1 = () => {

  const config = AppConfig()

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
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </>
  )
}

export default TestForm1
