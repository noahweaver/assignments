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
        christmas: false,
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
    const [blacklistFlags, setBlacklistFlags] = useState ("")
    const [categoriesInputs, setCategoriesInputs] = useState("any")
    const [filteredJokesArr, setFilteredJokes] = useState([])


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
    //update categoriesInput state based on filters
    function anyOrCategories() {
        console.log("anyOrCategories was called")
        let categoryInputs = document.getElementsByClassName("category")
            const selectedCategories = []
            for (let i = 0; i < categoryInputs.length; i++){
                console.log("category input for loop")
                if (categoryInputs[i].checked === true){
                    selectedCategories.push(categoryInputs[i].name)
                }
                console.log("selectedCategories", selectedCategories)
            }
            if(selectedCategories.length === 0){
                return categoriesInputs
            } else {
                setCategoriesInputs(selectedCategories.join(","))
                console.log("changed state")
            }
            console.log("changed selectedCategories state")
    }
    //update blacklistFlags state based on filters
    function blacklist (){
        let flagInputs = document.getElementsByClassName("flag")
            const selectedFlags = []
            for (let i = 0; i < flagInputs.length; i++){
                console.log("flag input for loop")
                if (flagInputs[i].checked === true){
                    selectedFlags.push(flagInputs[i].name)
                }
                console.log("selectedFlags", selectedFlags)
            }
            if(selectedFlags.length === 0){
                return blacklistFlags
            } else {
                selectedFlags.join(",")
                setBlacklistFlags(`blacklistFlags=${selectedFlags}&`)
                console.log("changed blacklistFlags state")
            }        
    }
    function handleSubmit(event){
        event.preventDefault()
        console.log("handleSubmit")
        blacklist()
        anyOrCategories()
        fetch(`https://v2.jokeapi.dev/joke/${categoriesInputs}?${blacklistFlags}amount=10`)
                .then(console.log("fetch"))
                .then(response => response.json())
                .then((response) => setFilteredJokes(response.jokes))
                .catch(err => console.log(err))

    }

    //clear checkboxes
    function clearFilters(event){
        event.preventDefault()
        console.log("clearFilters cleared filters and reset state")
        setFormCategories({
            christmas: false,
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
        setBlacklistFlags("")
        setCategoriesInputs("any")
        setFilteredJokes([])
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
