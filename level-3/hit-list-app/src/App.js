import React, { Component } from 'react'
import Target from './Target'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hitList: []
        }
    }
    componentDidMount(){
        console.log("DidMount")
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {this.setState({
                hitList: data
                })
                console.log(this.state.hitList)
            })
            
    }

    render() {
        console.log("render")
        const targets = this.state.hitList.map((target, index) => (<Target key={index} target={target}/>))
        return (
            <div>
                {targets}
            </div>
        )
    }
}

export default App
