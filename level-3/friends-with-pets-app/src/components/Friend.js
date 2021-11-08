import React from "react"
import Pet from "./Pet"

function Friend(props){
    
    const pets = props.friend.pets.map(pet => <Pet key={pet.name} pet={pet} />)

    return(
        <div>
            <h1>
              {props.friend.name}
            </h1>
            <div>
              Age: {props.friend.age}
              <br/>
              Pet Names: {pets}
            </div>
        </div>
    )
}

export default Friend
