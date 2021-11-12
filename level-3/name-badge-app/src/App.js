import React, { Component } from "react"
import Badge from "./components/Badge"

class App extends Component{
    state = {
        badge: {
            firstName: " ",
            lastName: " ",
            placeOfBirth: " ",
            favFood: " ",
            email: " ",
            phone: " ",
            addComment: " "
        },
        badgesArr: []
    }
        //this.submitBadge =submitBadge.bind(this)
        //this.handleChange =handleChange.bind(this)
    
    //gather data
    handleChange = (event) => {
        console.log("handleChange")
        // event.preventDefault()
        const {name, value} = event.target
        this.setState( prevState => ({
            badge: {...prevState.badge, [name]: value}
        }))
        console.log(this.state)
    }
    //push data to new badge
    submitBadge = (event) => {
        event.preventDefault()
        console.log("submitBadge")
        //clear previous list
        // const list = document.getElementById("badge-list")
        // while(list.firstChild){
        //     list.removeChild(list.firstChild)
        // }
        const newBadge = {...this.state.badge}
        // delete newBadge.badgesArr
        this.setState(prevState => ({
            badge: {
                firstName: " ",
                lastName: " ",
                placeOfBirth: " ",
                favFood: " ",
                email: " ",
                phone: " ",
                addComment: " "
            },
            badgesArr: [...prevState.badgesArr, newBadge]
        }))
            console.log(this.state)
            
        //   document.getElementById("firstName").value = ""
        //   document.getElementById("lastName").value = ""
        //   document.getElementById("email").value = ""
        //   document.getElementById("birthplace").value = ""
        //   document.getElementById("phone").value = ""
        //   document.getElementById("favFood").value = ""
        //   document.getElementById("commentArea").value = ""
    }
            // console.log("submitBadge, setState")
            // prevState.badgesArr.pushstate)
            // console.logstate.badgesArr)

            //does not render on screen
            
            // console.log("submitBadge, setState, prevState.badgesArr.map")
            // console.log(person)
            // document.getElementById("badge-list") 
            
            
            // const listItem = document.createElement("li")
            // document.getElementById("badge-list").appendChild(listItem).textContent = person //returns one string with everything. The badgesArr renders [object, Object]
            // document.getElementById("badge-list").appendChild(listItem).textContent = <Badge key={badge.name} badge={badge} />
            // return person.firstName
            
            
            
        
        render(){
            console.log("render")
            const formStyles = {
                border: "2px solid black",
                borderRadius: "2%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                margin: "5% 25% 5% 25%",
                padding: "5% 25% 5% 25%"
                //need to center boxes
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
                //center button on inputs
                
            }
            
            const badges = this.state.badgesArr.map((badge, index) => <Badge key={index} {...badge} />)

            return(
                <div>
                    <label>Badge Form</label>
                    <form onSubmit={this.submitBadge} style={formStyles} className="form-container">
                        <input 
                        id="firstName"
                        name="firstName"
                        placeholder="First Name" 
                        minLength="3"
                        value={this.state.badge.firstName}
                        onChange={this.handleChange}
                        required
                        />
                        <input 
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        minLength="3"
                        value={this.state.badge.lastName}
                        onChange={this.handleChange}
                        required
                        />
                        <input 
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        minLength="3"
                        value={this.state.badge.email}
                        onChange={this.handleChange}
                        required
                        />
                        <input 
                        id="birthplace"
                        name="placeOfBirth"
                        placeholder="Place of Birth"
                        minLength="3"
                        value={this.state.badge.placeOfBirth}
                        onChange={this.handleChange}
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
                        value={this.state.badge.phone}
                        onChange={this.handleChange}
                        required
                        />
                        <input 
                        id="favFood"
                        name="favFood"
                        placeholder="Favorite Food"
                        minLength="3"
                        value={this.state.badge.favFood}
                        onChange={this.handleChange}
                        required
                        />
                        <textarea 
                        id="commentArea"
                        name="addComment"
                        value={this.state.badge.addComment}
                        onChange={this.handleChange}
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
}

export default App