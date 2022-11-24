import React, { useState, useRef } from 'react'
import './styles/Mail.css'
import { InputField, Options } from './index'
import { toSendInitialState, handleSubmit } from '../../utils'

const Mail = () => {
  const [toSend, setToSend] = useState(toSendInitialState);
  const { email, name, message } = toSend
  const error = useRef()
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setToSend(toSendInitialState)
  }
  return (
    <section className='mail' id='mail'>
      <h2>Get In Touch</h2>
      <form className='entry'>
        <div className="flex">
          <InputField name="name" value={name} handleChange={handleChange} labelTitle="Name" />
          <InputField name="email" value={email} handleChange={handleChange} labelTitle="Email" />
        </div>
        <div className="flex">
          <Options toSend={toSend} handleChange={handleChange} />
          <InputField name="message" cols="30" rows="5" value={message} handleChange={handleChange} labelTitle="Message" />
        </div>
        <div className="flex">
          <p style={{ color: 'red', display: 'none' }} ref={error}>You missed a field </p>
          <button className='btn' onClick={() => handleSubmit(toSend, error, reset)}>Send Message</button>
        </div>
      </form>
    </section>
  )
}
export default Mail;