const ContactOption = ({toSend, handleClick, radio, value, text}) => (
    <div>
        <input
            type="radio"
            name="subject"
            value={value}
            id={value}
            checked={toSend.subject === {value}}
            onChange={(e) => handleClick(e)}
            ref={radio}
        />
        <label htmlFor={value}>{text}</label>
    </div>
)
export default ContactOption;