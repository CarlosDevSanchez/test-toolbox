import React from 'react';

const Input = (props) => {
    return (
        <input 
            type={props.type || 'text'} 
            name={props.name} 
            id={props.id} 
            className={props.stylesheet} 
            placeholder={props.placeholder} 
            defaultValue={props.value}
            {...props} />
    )
}

export default Input;