import React, {useEffect, useState} from "react"
import "./genreList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const GenreList = () => {
    
    const [genreList, setGenreList] = useState([])
    const {category} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [category])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=9a41499893153ec1c00c78b4a5edd4db&with_genres=${category ? category : "53"}`)
        .then(res => res.json())
        .then(data => setGenreList(data.results))
    }

    return (
        <div className="movie__list">
            <div className="list__cards">
                {
                    genreList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default GenreList;