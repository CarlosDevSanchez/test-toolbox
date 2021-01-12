import React from 'react';

const Button = (props) => {
    return(
        <button 
            type={props.type || 'button'} 
            className={props.stylesheet} 
            name={props.name} 
            id={props.id}
            {...props}>
            {props.children}
        </button>
    )
}

export default Button;