import React from 'react'
import '../Components/styles.css'
import MovieCard from './MovieCard';

const WatchList = ({ watchList, movies, toggleWatchlist}) => {
  return (
    <div>
      <h2 className='title'>Your WatchList</h2>
      <div className="watchlist">
        {
          watchList.map(id =>{
            const movie = movies.find(movie => movie.id === id);
            return <MovieCard key={id} movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={true}/>
          })
        }
      </div>
    </div>
  )
}

export default WatchList
