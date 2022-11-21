import { useState, useRef } from 'react'
import { animateScroll } from 'react-scroll';
import { arrayOfWords } from '../utils/randomWords'

const useChange = () => {
    const [number, setNumber] = useState(0);
    const textContent = useRef();
    const handleChange = (e) => {
        const text = textContent.current
        text.style.display = 'inline-block';
        text.innerText = arrayOfWords[number]
        if ((arrayOfWords.length - 1) !== number) {
            setNumber(number + 1)
        }
        if ((arrayOfWords.length - 1) === number) {
            setTimeout(() => {
                text.current.style.display = 'none'
                animateScroll.scrollTo(350)
                setNumber(1)
            }, 1000);
        }
    }
    return {handleChange, textContent}
}

export default useChange