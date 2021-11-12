import React from 'react'
import "./Styles.css"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            namesArr: [],
            backgroundColor: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.addName = this.addName.bind(this)

    }
    addName(){
        const list = document.getElementById("name-list")
        while(list.firstChild){
            list.removeChild(list.firstChild)
        }

        this.setState(prevState => {
            console.log("addName")
            prevState.namesArr.push(this.state.name)
            console.log(this.state.namesArr)
            prevState.namesArr.map( name => {
                const listItem = document.createElement("li")
                document.getElementById("name-list").appendChild(listItem).textContent = name
            })
        })
        //clear input
        document.getElementById("inputName").value = ""

    }
    handleChange(event){
        console.log("handleChange")
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    componentDidMount(){
        console.log("DidMount")
        fetch("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
        .then(response => response.json())
        .then(data => {this.setState({
            backgroundColor: data.new_color 
        })
            console.log(data)
            console.log(data.new_color)
    })
    }
    render(){
        const newBackground = `#${this.state.backgroundColor}`
        console.log(newBackground)
        document.body.style = `background-color: ${newBackground}`
        return(
            <div>
                <input
                    id="inputName"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}

                    />
                <button onClick={this.addName}>
                    Add to list
                </button>

                <h1>{this.state.name}</h1>
                <ul id="name-list">
                    {/* Added names will appear here */}
                </ul>
            </div>
        )
    }
}


export default App