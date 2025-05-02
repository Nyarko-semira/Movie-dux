import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MoviesGrid from './Components/MoviesGrid'
import WatchList from './Components/WatchList'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import '../src/Components/styles.css'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);


  useEffect(() => {
    fetch("movies.json")
      .then(response => response.json())
      .then(data => setMovies(data))

  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchList(prev =>
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    )
  }

  return (
    <div className='App'>
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/watchlist">WatchList</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/'
              element={<MoviesGrid movies={movies}
                watchList={watchList} toggleWatchlist={toggleWatchlist}/>}>
            </Route>
            <Route path='/watchlist'
              element={<WatchList watchList={watchList} movies={movies} toggleWatchlist={toggleWatchlist}/>}>
            </Route>
          </Routes>
        </Router>
      </div>

      <Footer />



    </div>
  )
}

export default App

