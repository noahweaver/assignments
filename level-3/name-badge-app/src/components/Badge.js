import React from 'react'

function Badge (props) {
    const {
        firstName,
        lastName,
        phone,
        email, 
        placeOfBirth,
        favFood,
        addComment,
    } = props

    return (
        <li className="badges">
            <h1>{firstName} {lastName}</h1>
            <p>
                Phone Number: {phone} <br/>
                E-mail: {email}
                Favorite Food: {favFood}
                Birthplace: {placeOfBirth}
            </p>
            <p>
                Additional Comments: {addComment}
            </p>
        </li>
    )
}

export default Badge
