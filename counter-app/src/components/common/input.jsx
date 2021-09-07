import React from 'react';

const Input = ( {name, label, value, onChange, autoFocus} ) => {
    return ( 
        <div className="form-group"><label htmlFor={name}>{ label }</label>
                <input 
                onChange = {onChange}
                value = {value} 
                autoFocus = {autoFocus}
                id={name}
                name = {name}
                type="text"
                className="form-control"
                />
                </div>
     );
}
 
export default Input;