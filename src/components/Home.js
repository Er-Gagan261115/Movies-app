import React, { useEffect, useState } from 'react'
import DisplayMovies from './DisplayMovies.js'
import './Home.css'
const Home = () => {
    const [movies, setmovies] = useState([])

    const fetchmoviesdata = () => {
        fetch(" https://api.tvmaze.com/search/shows?q=all").then(response => response.json()).then(
            data => {
                setmovies(data)

            }
        )
    }
    useEffect(() => {

        fetchmoviesdata();

    }, [])
    console.log(movies)


    return (
        <div className='parent_div_home'>
            <header className="Header_wrapper">
                <h1 >Movie Maniac</h1>
                <input type='text' placeholder='Enter Movie Name'></input>
            </header>
            <div className='display_movies'>
                <DisplayMovies moviesarr={movies} />
            </div>
        </div>
    )
}
export default Home