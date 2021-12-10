import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Movie from './Movie'
import MovieForm from './MovieForm'


function App() {

    const [movies, setMovies] = useState([])
    // const [errorStatus, setErrorStatus] = useState({})
        //implement error in a modal
            //save error in state with properties
            //create error component(modal)
            //render with close button that changes error state to false
            //needs isError boolean
            //render if true

    useEffect(() => {
        getMovies()
    }, [])

    function getMovies(){
        axios.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err.response.data.err))
    }

    function addMovie(newMovie){
        axios.post('/movies', newMovie)
            .then(res => {
                setMovies(prevMovies => [...prevMovies, res.data])
            })
            .catch(err => console.log(err))
    }
    function handleDelete(movieId){
        axios.delete(`/movies/${movieId}`)
            .then(res => {  
                setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
            })
            .catch(err => console.log(err))
    }
    function editMovie(updates, movieId){
        axios.put(`/movies/${movieId}`, updates)
            .then(res => {
                setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
            })
            .catch(err => console.log(err))
    }
    function handleFilter(e){
        if(e.target.value === "all"){
            getMovies()
        }else{
           axios.get(`/movies/search/genre?genre=${e.target.value}`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err)) 
        }
        
    }

    return (
        <div>
            <div className="movie-container">
                <MovieForm 
                    submit={addMovie}
                    btnText="Add Movie"
                    />

                <h4>Filter by Genre</h4>
                <select 
                    onChange={handleFilter} 
                    className="filter-form"
                    >
                    <option value="all">All Movies</option>
                    <option value="action">Action</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                </select>

                {movies.map(movie => 
                    <Movie 
                        {...movie} 
                        key={movie.title} 
                        handleDelete={handleDelete}
                        editMovie={editMovie}
                    />)
                }
            </div>
        </div>
        
    )
}

export default App
