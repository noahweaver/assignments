import React, {useContext, useState} from 'react'
// import {useParams} from 'react-router-dom'
import {Context} from './Context'
import Nav from './reused_components/Nav'
import Footer from './reused_components/Footer'
import Sidebar from './reused_components/Sidebar'
import Jokecard from './Jokecard'

//api docs: https://jokeapi.dev/

function Types(props) {
    const {} = useContext(Context)
    // let params = useParams()

    //separate between categories and flags
        //can this be an array instead of object?
        //change props and sidenav as needed
    const [jokeForm, setJokeForm] = useState({
        xmas: false,
        dark: false,
        misc: false,
        programming: false,
        pun: false,
        spooky: false,
        explicit: false,
        nsfw: false,
        political: false,
        racist: false,
        religious: false,
        sexist: false,
    })
    //state for true values
        //categories and flags need to be separate
        //make a string before setting state for ease of use in fetch
        //if I can't make joke form an array, I'll need to make state an array so that it can iterate through, pull out anything true (map, filter, or splice?), then convert to string with join
    const [filteredJokesArr, setFilteredJokes] = useState([])
    const [categoriesArr, setCategories] = useState([])
    const [flagsArr, setFlags] = useState([])
    // const [filteredRequestCount, setFilteredRequestCount] = useState({
    //     count1: 0,
    //     count2: 9
    // })
   

    //checkboxes handlechanger
    function handleChange(event){
        console.log("checkboxChange")
        const {name, value, checked} = event.target
        setJokeForm(prevState => ({...prevState, [name]: event.target.type === "checkbox" ? checked : value}))
    }

    //filteredIncrement function

    //onSubmit form function
        //will need to change fetch based on filters
        //if state boolean = true then add to state string
            //concat or push?
            //join?
        //concat flag and category state string into fetch req
    function handleSubmit(event){
        event.preventDefault()
        console.log("handleSubmit")
        
        fetch("https://v2.jokeapi.dev/joke/Any?idRange=0-9&amount=10")
            .then(response => response.json())
            .then((response) => setFilteredJokes(response.jokes))
            // .then(filteredIncrement())
            .catch(err => console.log(err))
        //fetch data based on state booleans
            //then push to filteredJokesArr
    }

    //map to render jokes
    const filteredJokeList = filteredJokesArr.length > 0 ? filteredJokesArr.map(joke => 
                    <Jokecard key={joke.id} 
                        setup={joke.setup} 
                        delivery={joke.delivery} 
                        joke={joke.joke}
                    />) : null

    return (
        <>
            <Nav />
            <div className="section-content">
                <div className="d-flex">
                    <Sidebar 
                        jokeForm={jokeForm} 
                        setJokeForm={setJokeForm} 
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                    {/* copy styling from jokelibrary */}
                <div className="col-lg-9"> 
                    <p className="display-6 m-5">Jokes by type</p>
                    <ul>
                        <p>jokecards will render here</p>
                        <br></br>
                        {filteredJokeList}
                        
                    </ul>                
                </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Types
