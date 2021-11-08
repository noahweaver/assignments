import React from "react"
import FriendArray from "./FriendArray"
import Friend from "./Friend"

function FriendList (){

    const friends  = FriendArray.map(friend => <Friend key={friend.name} friend={friend}/>)

    return(
        <div>
            {friends}
        </div>
    )
}

export default FriendList