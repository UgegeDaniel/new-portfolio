const InputField = ({ name, value, handleChange, labelTitle, cols, rows}) => (
    <div className=".input-item">
        <label htmlFor={name} style={{display: "block"}}>{labelTitle}</label>
        {name === "message"
            ? <textarea name={name} cols={cols} rows={rows} value={value} onChange={handleChange}></textarea>
            : <input type="text" name={name} autoComplete='off' value={value} onChange={handleChange} />
        }

    </div>
)
export default InputField