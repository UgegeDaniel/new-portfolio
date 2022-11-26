import ContactOption from './ContactOption'
import { useEffect, useState, useRef } from 'react';
const Options = ({ toSend, handleChange }) => {
    const work = useRef(null);
    const collab = useRef(null);
    const chat = useRef(null);
    const radio = [work, collab, chat]
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        // const arrayOfSub = ['work', 'chat', 'collaboration']
        // if (toSend.subject === '') {
        //     setIsDisabled(false)
        // } else {
        //     if (!(arrayOfSub.includes(toSend.subject))) {
        //         radio.current.checked = false;
        //         setIsDisabled(true)
        //     }
        // }

    }, [toSend.subject])

    const handleClick = (e) => {
        // console.log(radio)
        handleChange(e);
        if (e.target.id === toSend.sbject) {
            radio.forEach((rad)=> {
                (e.target.id === rad.current.id)
                && console.log(rad.current.checked)
            })
            // setIsDisabled(false)
        }
    }
    return (
        <div className='options'>
            <ContactOption toSend={toSend} radio={work} handleClick={handleClick} value="work" text="Work" />
            <ContactOption toSend={toSend} radio={collab} handleClick={handleClick} value="collaboration" text="Collaboration" />
            <ContactOption toSend={toSend} radio={chat} handleClick={handleClick} value="chat" text="Coffee Chat" />
            <div>
                <input type="text" name="subject" id='other' placeholder='Other' autoComplete='off' onChange={handleChange} />
            </div>
        </div>
    )
}
export default Options