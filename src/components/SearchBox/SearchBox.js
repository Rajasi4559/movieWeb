import React, {useEffect, useState} from "react"
import "./SearchBox.css"
import Cards from "../card/card"

const MovieSearch = () => {
    
    const [moviesearch, setMovieSearch] = useState([])
    const [name, setName]=useState('');

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [name])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=9a41499893153ec1c00c78b4a5edd4db&query=${name ? name : "avengers"}`)
        .then(res => res.json())
        .then(data => setMovieSearch(data.results))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
      }

    return (
       <div classname="searchreturn">
        <form onSubmit={handleSubmit} className="search_box">
			<input
				className="search_input"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Type to search...'
			></input>
		</form>
        <div className="movie__list">
            <h2 className="list__title">{(name ? name : "AVENGERS").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    moviesearch.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default MovieSearch;