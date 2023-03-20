import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://pbs.twimg.com/profile_images/1423719077105881088/9UE88_bE_400x400.jpg" /></Link>
                <Link to="/"><img className="header__name" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cAgt8lPSNYrqzF_7-41n535ZHKzpVr34tA&usqp=CAU" /></Link>
                <Link to="/" style={{textDecoration: "none"}}><span>Home</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <div class="dropdown">
                   <button class="dropbtn">Genre</button>
                       <div class="dropdown-content">
                           <Link to="/movies/genre/28" style={{textDecoration: "none"}}>Action</Link>
                           <Link to="/movies/genre/12" style={{textDecoration: "none"}}>Adventure</Link>
                           <Link to="/movies/genre/16" style={{textDecoration: "none"}}>Animation</Link>
                           <Link to="/movies/genre/35" style={{textDecoration: "none"}}>Comedy</Link>
                           <Link to="/movies/genre/80" style={{textDecoration: "none"}}>Crime</Link>
                           <Link to="/movies/genre/99" style={{textDecoration: "none"}}>Documentry</Link>
                           <Link to="/movies/genre/18" style={{textDecoration: "none"}}>Drama</Link>
                           <Link to="/movies/genre/10751" style={{textDecoration: "none"}}>Family</Link>
                           <Link to="/movies/genre/14" style={{textDecoration: "none"}}>Fantasy</Link>
                           <Link to="/movies/genre/36" style={{textDecoration: "none"}}>History</Link>
                           <Link to="/movies/genre/27" style={{textDecoration: "none"}}>Horror</Link>
                           <Link to="/movies/genre/10402" style={{textDecoration: "none"}}>Music</Link>
                           <Link to="/movies/genre/9648" style={{textDecoration: "none"}}>Mystry</Link>
                           <Link to="/movies/genre/10749" style={{textDecoration: "none"}}>Romance</Link>
                           <Link to="/movies/genre/878" style={{textDecoration: "none"}}>Science Fiction</Link>
                           <Link to="/movies/genre/53" style={{textDecoration: "none"}}>Thriller</Link>
                           <Link to="/movies/genre/37" style={{textDecoration: "none"}}>Western</Link>

                        </div>
                </div>
                
            </div>
            <div className="headerRight">
            <Link to="/movies/search" style={{textDecoration: "none"}}><span>Search</span></Link>
            </div>
        </div>
    )
}

export default Header;