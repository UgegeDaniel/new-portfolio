const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const acceptedEmail = ['gmail.com', 'yahoo.com', 'outlook.com', 'protonmail.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com', 'gmx.com', 'hey.com']

const validation = (toSend, valid) => {
    const { email, name, message } = toSend
    if (email.match(emailRegExp)) {
        acceptedEmail.includes(email.split('@')[1]) ?
            valid.email = true : valid.email = false
    } else {
        valid.email = false;
    }
    if (name !== '' && message !== '') {
        valid.rest = true;
    } else {
        valid.rest = false;
    }
}

export default validation;