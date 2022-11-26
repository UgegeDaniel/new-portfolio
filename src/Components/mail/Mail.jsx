import React, { useState, useRef } from 'react'
import './styles/Mail.css'
import { InputField } from './index'
import { toSendInitialState, handleSubmit } from '../../utils'

const Mail = ({section}) => {
  const [toSend, setToSend] = useState(toSendInitialState);
  const { email, name, message } = toSend
  const error = useRef()
  const success = useRef()
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setToSend(toSendInitialState)
  }
  return (
    <section className='mail' id='mail' ref={section}>
      <h2>Get In Touch</h2>
      <form className='entry'>
        <div className="flex">
          <InputField name="name" value={name} handleChange={handleChange} labelTitle="Name" />
          <InputField name="email" value={email} handleChange={handleChange} labelTitle="Email" />
        </div>
        <div className="flex-col">
          <InputField name="message" rows="5" value={message} handleChange={handleChange} labelTitle="Message" />
        </div>
        <div className="flex">
          <p style={{ color: 'red', display: 'none' }} ref={error}>Something went wrong </p>
          <p style={{ color: 'green', display: 'none' }} ref={success}>Thank you for Reaching out</p>
          <button className='btn' onClick={(e) => handleSubmit(e, toSend, error, success, reset)}>Send</button>
        </div>
      </form>
    </section>
  )
}
export default Mail;