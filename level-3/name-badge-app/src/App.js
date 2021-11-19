import React, { useState } from "react"
import Badge from "./components/Badge"

function App () {

    const [badge, setBadge] = useState({
            firstName: " ",
            lastName: " ",
            placeOfBirth: " ",
            favFood: " ",
            email: " ",
            phone: " ",
            addComment: " "
    })
    const [badgesArr, setBadgesArr] = useState([])
    
    //gather data
    function handleChange(event) {
        console.log("handleChange")
        event.preventDefault()
        const {name, value} = event.target
        setBadge( prevBadge => (
            {...prevBadge, [name]: value}
            ))
        console.log(badge)
    }
    //push data to new badge
    function submitBadge(event) {
        event.preventDefault()
        console.log("submitBadge")
        const newBadge = {...badge}
        // delete newBadge.badgesArr
        setBadgesArr(prevBadgesArr => ( 
         [...prevBadgesArr, newBadge]
        ))
            console.log(badgesArr)
            
        //   document.getElementById("firstName").value = ""
        //   document.getElementById("lastName").value = ""
        //   document.getElementById("email").value = ""
        //   document.getElementById("birthplace").value = ""
        //   document.getElementById("phone").value = ""
        //   document.getElementById("favFood").value = ""
        //   document.getElementById("commentArea").value = ""
    }
            
        
        const formStyles = {
            border: "2px solid black",
            borderRadius: "2%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            margin: "5% 25% 5% 25%",
            padding: "5% 25% 5% 25%"
        }
        const textAreaStyle = {
            gridColumnStart: 1,
            gridColumnEnd: 3,
            gridRow: (4 , 5),
            width: "95%"
        }
        const buttonStyle = {
            gridColumnStart: 1,
            gridColumnEnd: 3,
            width: "50%",
            gridRow: (5 , 6)    
        }
            
        const badges = badgesArr.map((badge, index) => <Badge key={index} {...badge} />)

        return(
            <div>
                <label>Badge Form</label>
                <form onSubmit={submitBadge} style={formStyles} className="form-container">
                    <input 
                    id="firstName"
                    name="firstName"
                    placeholder="First Name" 
                    minLength="3"
                    value={badge.firstName}
                    onChange={handleChange}
                    required
                    />
                    <input 
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    minLength="3"
                    value={badge.lastName}
                    onChange={handleChange}
                    required
                    />
                    <input 
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    minLength="3"
                    value={badge.email}
                    onChange={handleChange}
                    required
                    />
                    <input 
                    id="birthplace"
                    name="placeOfBirth"
                    placeholder="Place of Birth"
                    minLength="3"
                    value={badge.placeOfBirth}
                    onChange={handleChange}
                    required
                    />
                    <input 
                    //needs to take numbers only
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    type="phone"
                    minLength="3"
                    maxLength="11"
                    value={badge.phone}
                    onChange={handleChange}
                    required
                    />
                    <input 
                    id="favFood"
                    name="favFood"
                    placeholder="Favorite Food"
                    minLength="3"
                    value={badge.favFood}
                    onChange={handleChange}
                    required
                    />
                    <textarea 
                    id="commentArea"
                    name="addComment"
                    value={badge.addComment}
                    onChange={handleChange}
                    placeholder="Important information or additional comments"
                    style={textAreaStyle}
                    >
                    </textarea>
                    <button type="submit" style={buttonStyle}>Submit</button>
                </form>
                <ul>
                    {badges}
                </ul>
            </div>
        )
    }


export default App