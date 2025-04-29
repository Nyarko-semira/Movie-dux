import React, { useState, useEffect } from 'react'
import '../Components/styles.css'
import MovieCard from './MovieCard';


const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")


    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))


    }, [])

    return (
        <div>
            <input type='text' className='search-input' placeholder='search movies...' />
            <div className='movies-grid'>
                {
                    movies.map(movie => (
                        <MovieCard movie={movie} />
                    ))
                }

            </div>
        </div>
    )
}

export default MoviesGrid
