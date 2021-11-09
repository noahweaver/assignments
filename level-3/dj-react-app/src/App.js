import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import "./styles.css"

class App extends React.Component {
    render(){
        return(
            <body>
                <Header />
                <Main />
            </body>
        )  
    }
}

export default App