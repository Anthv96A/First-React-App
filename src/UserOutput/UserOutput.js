import React from 'react';

const userOutput = (props) => {
    return(
        <div>
            <p>First paragraph {props.name}</p>
            <p>Second paragraph {props.name} </p>
        </div>
    );
}

export default userOutput;