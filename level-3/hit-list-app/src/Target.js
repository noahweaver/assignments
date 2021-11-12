import React from 'react'

function Target(props) {
    const imageStyles = {
        width: 150,
        height: 150
    }

    return (
        <div>
            <h1>{props.target.name}</h1>
            <img src={props.target.image} style={imageStyles} />
        </div>
    )
}

export default Target
