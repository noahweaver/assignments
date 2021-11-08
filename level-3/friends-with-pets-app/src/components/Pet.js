import React from "react"


function Pet (props) {
   

    return(
            <ul>
                <li>
                    {props.pet.name}
                </li>
            </ul>
               
            
    )
}

export default Pet