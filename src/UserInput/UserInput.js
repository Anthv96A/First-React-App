import React from 'react'

const userInput = (props) => {
    return(
        <div>
            <input onChange={props.click} value= {props.name} type="text" />
        </div>
    );
}

export default userInput;