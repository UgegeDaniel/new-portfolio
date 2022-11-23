const ContactOption = ({toSend, handleChange, radio, isDisabled, value, text}) => (
    <div>
        <input
            type="radio"
            name="subject"
            value={value}
            id={value}
            checked={toSend.subject === {value}}
            onChange={handleChange}
            ref={radio}
            disabled={isDisabled}
        />
        <label htmlFor={value}>{text}</label>
    </div>
)
export default ContactOption;