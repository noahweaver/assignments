import React, {useState} from 'react'
import MovieForm from './MovieForm'

function Movie(props) {

    const {title, genre, _id} = props
    const [isEditing, setEditing] = useState(false)

    return (
        <div className="movie">
            { !isEditing ? 
                <>
                    <h1>Title: {title}</h1>
                    <p>Genre: {genre}</p>
                    <button 
                        className="delete-btn" 
                        onClick={() => props.handleDelete(_id)}
                        >Delete
                    </button>
                    <button
                        className='edit-btn'
                        onClick={() => setEditing(prevIsEdit => !prevIsEdit)}
                        >Edit
                    </button>
                </>
            : 
                <>
                    <MovieForm 
                        title={title} 
                        genre={genre} 
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editMovie}
                        /> 
                    <button 
                        onClick={() => setEditing(prevIsEdit => !prevIsEdit)}
                        >Close
                    </button>
                </>
            }
        </div>
    )
}

export default Movie
