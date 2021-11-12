import React from 'react'
import Badge from "./Badge"

class Form extends React.Component{
    
    
    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            placeOfBirth: "",
            favFood: "",
            email: "",
            phone: 0,
            addComment: "",
            badgesArr: []
        }
        this.submitBadge = this.submitBadge.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        event.preventDefault()
        console.log("handleChange")
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    submitBadge(event){
        console.log("submitBadge")
        event.preventDefault()
        const list = document.getElementById("badge-list")
        while(list.firstChild){
            list.removeChild(list.firstChild)
        }
            // rewatch fetching data video. figure out how to fetch the data and pass to Badge.js to then render on the screen.  to do this I will need to create the badge = {} in state and this will disable my handleChange. 
        this.setState((prevState) => {
            console.log("submitBadge, setState")
            prevState.badgesArr.push(this.state)
            console.log(this.state.badgesArr)
            prevState.badgesArr.map( badge => {
                console.log("submitBadge, setState, prevState.badgesArr.map")
                console.log(badge)
                document.createElement("li", <Badge key={badge.name} badge={badge}/>)
                return badge
            })
            
        })   
            //     {

            //     const listItem = document.createElement("li")
            //     document.getElementById("badge-list").appendChild(listItem).textContent = <Badge key={badge.name} badge={badge} />
            
            //     // document.getElementById("badge-list").appendChild(listItem).textContent = Object.values(badge)
            //     console.log(badge)
            //     // return      
            // })
        
        document.getElementById("firstName").value = ""
        document.getElementById("lastName").value = ""
        document.getElementById("email").value = ""
        document.getElementById("birthplace").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("favFood").value = ""
        document.getElementById("commentArea").value = ""
    }
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

        return(
            <div>
                <div style={formStyles} className="form-container">
                    <input 
                    id="firstName"
                    name="firstName"
                    placeholder="First Name" 
                    minLength="3"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required
                    />
                    <input 
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    minLength="3"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required
                    />
                    <input 
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    minLength="3"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    />
                    <input 
                    id="birthplace"
                    name="placeOfBirth"
                    placeholder="Place of Birth"
                    minLength="3"
                    value={this.state.placeOfBirth}
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
                    value={this.state.phone}
                    onChange={this.handleChange}
                    required
                    />
                    <input 
                    id="favFood"
                    name="favFood"
                    placeholder="Favorite Food"
                    minLength="3"
                    value={this.state.favFood}
                    onChange={this.handleChange}
                    required
                    />
                    <textarea 
                    id="commentArea"
                    name="addComment"
                    value={this.state.addComment}
                    onChange={this.handleChange}
                    placeholder="Important information or additional comments"
                    style={textAreaStyle}
                    />
                    <button style={buttonStyle} onClick={this.submitBadge}>Submit</button>
                </div>
                <ul id="badge-list">
                    {/* {this.state.badgesArr > 0 && <li>{this.state.badgesArr}</li>} */}
                </ul>
            </div>
        )
    }
}

export default Form