import React from "react";

const Input = ({...props}) => {
    const handleChange = (e) => {
        if(props.inputLength) {
        if(e.target.value.length <= props.inputLength) {
        props.setValue(e.target.value)
        }} else {
            props.setValue(e.target.value)
        }
    }
    return <div className="input-field">
        <div className="label">{props.label}</div>
        <input style={{width: props.width || "100%"}}
         type="text" value={props.value} onChange={handleChange}/>
         <div className="error"></div>
    </div>
}

export default Input;