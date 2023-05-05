import React from "react"
import './Home.css'

const DisplayMovies = (props) => {

    
    // making cards to display movies
    return (
        props.moviesarr.map((data, index) => {
            return (
                
                <div className="display_moviedata" key={index}>
                    <img src={data.show.image != null ? data.show.image.original : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"} />
                    <div className="img_desc">
                        <h2>{data.show.name}</h2>
                        <h3>Language : {data.show.language}</h3>
                        <h3>Rating : {data.show.rating != null ? data.show.rating.average : "Underrated"}</h3>
                        
                        <a href={data.show.url} target="_blank">Explore</a>
                    </div>
                </div>
            )
        })
    )



}
export default DisplayMovies