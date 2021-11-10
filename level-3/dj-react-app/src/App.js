import React from "react"
import Header from "./components/Header"
import Grid from "./components/Grid"
import "./styles.css"

class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Grid />
            </div>
        )  
    }
}

export default App