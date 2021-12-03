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

    const [categories, setFormCategories] = useState({
        xmas: false,
        dark: false,
        misc: false,
        programming: false,
        pun: false,
        spooky: false
    })
    const [flags, setFormFlags] = useState({
        explicit: false,
        nsfw: false,
        political: false,
        racist: false,
        religious: false,
        sexist: false
    })

    const [filteredJokesArr, setFilteredJokes] = useState([])
    // const [categoriesArr, setCategoriesArr] = useState([])
    // const [flagsArr, setFlagsArr] = useState([])
    // const [filteredRequestCount, setFilteredRequestCount] = useState({
    //     count1: 0,
    //     count2: 9
    // })

    //checkboxes handlechangers
    function handleChangeCategories(event){
        console.log("checkboxChange: categories")
        const {name, value, checked} = event.target
        setFormCategories(prevState => ({...prevState, [name]: event.target.type === "checkbox" ? checked : value}))
    }
    function handleChangeFlags(event){
        console.log("checkboxChange: flags")
        const {name, value, checked} = event.target
        setFormFlags(prevState => ({...prevState, [name]: event.target.type === "checkbox" ? checked : value}))
    }

    
    //filteredIncrement function
        //can copy from context

    //onSubmit form function
        //will need to change fetch based on filters
        //if state boolean = true then add to array
            //convert to string
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
    //clear checkboxes
    function clearFilters(event){
        event.preventDefault()
        console.log("clearFilters cleared filters")
        let inputs = document.getElementsByTagName("input")
        for (let i = 0; i < inputs.length; i++){
            if (inputs[i].type == "checkbox"){
                inputs[i].checked = false
            }
        }
        //update state to all be false
        setFormCategories({
            xmas: false,
            dark: false,
            misc: false,
            programming: false,
            pun: false,
            spooky: false
        })
        setFormFlags({
            explicit: false,
            nsfw: false,
            political: false,
            racist: false,
            religious: false,
            sexist: false
        })
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
                        categories={categories} 
                        setFormCategories={setFormCategories} 
                        flags={flags} 
                        setFormFlags={setFormFlags} 
                        handleChangeCategories={handleChangeCategories}
                        handleChangeFlags={handleChangeFlags}
                        handleSubmit={handleSubmit}
                        clearFilters={clearFilters}
                    />
                    {/* copy styling from jokelibrary */}
                <div className="col-lg-9"> 
                    <p className="display-6 m-5">Jokes by type</p>
                    <ul>
                        <p>jokecards will render here</p>
                        <br></br>
                        {filteredJokeList}    
                    </ul>  
                    <button className="btn btn-outline-dark btn-sm m-3"
                    onClick={handleSubmit}
                    >Load More Jokes
                    </button>              
                </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Types
