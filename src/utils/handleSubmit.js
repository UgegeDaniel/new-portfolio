import emailjs from '@emailjs/browser';
import validation from './validation'

const serviceID = process.env.REACT_EMAIL_JS_SERVICE_ID
const templateID = process.env.REACT_EMAIL_JS_TEMPLATE_ID
const publicKey = process.env.REACT_EMAIL_JS_PUBLIC_KEY

const handleSubmit = (e, toSend, error, success, reset) => {
  e.preventDefault();
  const valid = { email: false, rest: false };
  validation(toSend, valid);
  const condition = Object.values(valid).every((value) => value === true)
  if (!condition) {
    error.current.style.display = 'block';
    setTimeout(()=> {
      error.current.style.display = 'none'
    }, 5000)
  } else {
    emailjs.send('service_jfy1coa', 'template_8gp1s0o', toSend, 'zJSXdqPnC5cYSFHl6')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        success.current.style.display = 'block'
        setTimeout(()=> {
          success.current.style.display = 'none'
        }, 5000)
      }, function (error) {
        console.log('FAILED...', error);
      });
    error.current.style.display = 'none'
    success.current.style.display = 'none'
    reset()
  }
}
export default handleSubmit;