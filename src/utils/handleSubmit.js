import { send } from 'emailjs-com';
import validation  from './validation'

const serviceID = process.env.REACT_EMAIL_JS_SERVICE_ID
const templateID = process.env.REACT_EMAIL_JS_TEMPLATE_ID
const publicKey = process.env.REACT_EMAIL_JS_PUBLIC_KEY

const handleSubmit = (toSend, error, reset) => {
    const valid = { email: false, rest: false };
    const { email, name, message, subject } = toSend
    validation(toSend, valid);
    const condition = Object.values(valid).every((value) => value === true)
    if (!condition) {
      error.current.style.display = 'block'
    } else {
      //Using email.js to send emails https://www.emailjs.com/docs/sdk/installation/
      send(serviceID, templateID, { subject, name, email, message, }, publicKey);
      error.current.style.display = 'none'
      reset()
    }
  }
  export default handleSubmit;