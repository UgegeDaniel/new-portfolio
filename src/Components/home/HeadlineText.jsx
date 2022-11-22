import { useChange } from '../../hooks'
const HeadlineText = () => {
    const { handleChange, textContent } = useChange();
    return (<h1>
        <span className='gradientText'> Hi, I'm Daniel! </span>
        <span>
            <span onClick={(e) => handleChange(e)}> 👋🏾 click me </span>
            <span ref={textContent} style={{ display: 'none' }}> Tap again </span>
        </span>
    </h1>)
}
export default HeadlineText