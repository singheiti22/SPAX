import React, { useState } from "react";

const Dropdown = ({value, setValue, ...props}) => {
    const [open, setOpen] = useState(false);
    return <div className="dropdown">
        <div className="main" onClick={() => setOpen(!open)}>
            <span className="selected-value">{value}</span>
            <span className="icon"><i className="arrow-down"></i></span>
        </div>
        {open && <div className="options">
            {props.options && props.options.map((item, index)=>{
                return <div className="option" key={index}
                    onClick={ () => {
                        setValue(item);
                        setOpen(false);
                    }}
                >
                    {item}
                </div>
            })}
        </div>}
    </div>
}

export default Dropdown;