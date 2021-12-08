import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Movie from './Movie'
import MovieForm from './MovieForm'


function App() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    function getMovies(){
        axios.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
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

    return (
        <div>
            <div className="movie-container">
                <MovieForm 
                    submit={addMovie}
                    btnText="Add Movie"
                    />
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