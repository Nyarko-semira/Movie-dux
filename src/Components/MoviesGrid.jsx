import React, { useState } from 'react'
import '../Components/styles.css'
import MovieCard from './MovieCard';


const MoviesGrid = ({movies, watchList ,toggleWatchlist}) => {
   
    const [searchTerm, setSearchTerm] = useState("");
    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleGenrneChange = (e) => {
        setGenre(e.target.value)
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value)
    }

    const matcheGenre = (movie, genre) => {
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    };

    const matchSeachTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    };

    const matchesRating = (movie, rating) => {
        switch (rating) {
            case 'All':
                return true;

            case 'Good':
                return movie.rating >= 8;

            case 'Ok':
                return movie.rating >= 5 && movie.rating < 8;

            case 'Bad':
                return movie.rating < 5;

            default:
                return false
        }
    }

    const filteredMovies = movies.filter((movie) =>
        matcheGenre(movie, genre) &&
        matchesRating(movie, rating) &&
        matchSeachTerm(movie, searchTerm) 
         
    );


    return (
        <div>
            <input type='text'
                className='search-input'
                placeholder='search movies...'
                value={searchTerm}
                onChange={handleSearchChange}
            />


            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className='filter-dropdown'
                        value={genre}
                        onChange={handleGenrneChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>

                

                <div className="filter-slot">
                    <label>Rating</label>
                    <select className='filter-dropdown'
                        value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>

            <div className='movies-grid'>
                {
                    filteredMovies.map(movie => (
                        <MovieCard movie={movie}
                        key={movie.id}
                        toggleWatchlist={toggleWatchlist}
                        isWatchlisted={watchList.includes(movie.id)}/>
                    ))
                }

            </div>
        </div>
    )
}

export default MoviesGrid
