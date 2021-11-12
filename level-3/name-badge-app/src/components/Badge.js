import React from 'react'

function Badge(props) {

    // const badge = props.state.badgesArr.map(badge => <Badge badge={badge} />)

    return (
        <div className="badges">
            <h1>{props.badge.firstName} {props.badge.lastName}</h1>
            <p>
                Phone Number: {props.badge.phone} <br/>
                E-mail: {props.badge.email}
                Favorite Food: {props.badge.favFood}
                Birthplace: {props.badge.placeOfBirth}
            </p>
            <p>
                Additional Comments: {props.badge.addComment}
            </p>
        </div>
    )
}

export default Badge
