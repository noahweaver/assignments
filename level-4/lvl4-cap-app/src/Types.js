import React, {useContext, useState} from 'react'
// import {useParams} from 'react-router-dom'
import {Context} from './Context'
import Nav from './reused_components/Nav'
import Footer from './reused_components/Footer'
import Sidebar from './reused_components/Sidebar'
import Jokecard from './Jokecard'


function Types(props) {
    //probably going to pull jokesArr from context
    const {} = useContext(Context)
    // let params = useParams()

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
    const [filteredJokesArr, setFilteredJokes] = useState()

    //checkboxes handlechanger
    function handleChange(event){
        console.log("checkboxChange")
        const {name, value, checked} = event.target
        setJokeForm(prevState => ({...prevState, [name]: event.target.type === "checkbox" ? checked : value}))
    }
    //submit form
    function handleSubmit(event){
        event.preventDefault()
        console.log("handleSubmit")
        fetch("https://v2.jokeapi.dev/joke/Any?idRange=0-9&amount=10")
            .then(response => response.json())
            .then((response) => setFilteredJokes(response.jokes))
            // .then(increment())
            .catch(err => console.log(err))
        //fetch data based on state booleans
            //then push to state array
    }

    //map to render jokes
    const filteredJokeList = filteredJokeFunction
    function filteredJokeFunction (){
        if (filteredJokesArr.length > 0) {
            filteredJokesArr.map(joke => 
                    <Jokecard key={joke.id} 
                        setup={joke.setup} 
                        delivery={joke.delivery} 
                        joke={joke.joke}
                    />) 
        }
    } 

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
