import React from 'react'

let Star = (props) => {

    console.log(props);

    return (
        <div>

            <h2>name: {props.name}</h2>
            <h2>age: {props.age}</h2>
            <h2>location: {props.location}</h2>

        </div>
    );
};
export default Star
