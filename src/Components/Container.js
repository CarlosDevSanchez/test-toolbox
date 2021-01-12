import React from 'react';

const Container = (props) => {
    return(
        <div className={props.stylesheet}>
            {props.children}
        </div>
    )
}

export default Container;