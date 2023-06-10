import {React, useEffect, useState} from 'react';
import './App.css';
import searchIcon from './search.svg';
import Movie from './MovieCard'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5ec96fd2'

// const movie1 = {
//     "Title": "The Avengers",
//     "Year": "2012",
//     "imdbID": "tt0848228",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// }

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchterm, setSearchterm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(API_URL + '&s=' + title)
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Avengers')
    }, [])
    return(
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
            placeholder = "Movies to search"
            value = {searchterm}
            onChange={(e) => (setSearchterm(e.target.value))}
            />
            <img 
            src = {searchIcon}
            alt = "search"
            onClick={()=>(searchMovies(searchterm))}
            />
        </div>

        {
            movies.length > 0 ? <div className='container'>{movies.map((movie)=>(<Movie movie1={movie}/>))}</div> : <div className="empty"><h2>No Movies Found</h2></div>
        }

    </div>
    );
}
// 
// 5ec96fd2
export default App