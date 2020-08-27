import React from 'react';

import './User.css';

const userInput = function(props){
    return (
        <input className="myInput" onChange={props.changed} value={props.username} />
    )
}

export default userInput;