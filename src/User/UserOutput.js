import React from 'react';

const userOutput = function (props) {
    return (
        <div>
            <p style={props.style}>Hello {props.username}, Nice too meet you. Can I help you?</p>
            <p>{props.children}</p>
        </div>
    )
}

export default userOutput;