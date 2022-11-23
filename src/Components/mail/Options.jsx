import ContactOption from './ContactOption'
import { useEffect, useState, useRef } from 'react';
const Options = ({toSend, handleChange}) => {
    const radio = useRef();
    const [isDisabled, setIsDisabled] = useState(false);
    useEffect(() => {
        const arrayOfSub = ['work', 'chat', 'collaboration']
        if (toSend.subject === '') {
            setIsDisabled(false)
        } else {
            if (!(arrayOfSub.includes(toSend.subject))) {
                radio.current.checked = false;
                setIsDisabled(true)
            }
        }
    }, [toSend.subject])
    return (
        <div className='options'>
            <ContactOption toSend={toSend} handleChange={handleChange} radio={radio} isDisabled={isDisabled} value="work" text="Work" />
            <ContactOption toSend={toSend} handleChange={handleChange} radio={radio} isDisabled={isDisabled} value="collaboration" text="Collaboration" />
            <ContactOption toSend={toSend} handleChange={handleChange} radio={radio} isDisabled={isDisabled} value="chat" text="Coffee Chat" />
            <div>
                <input type="text" name="subject" id='other' placeholder='Other' autoComplete='off' onChange={handleChange} />
            </div>
        </div>
    )
}
export default Options