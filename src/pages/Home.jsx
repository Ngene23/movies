import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home(){

    const [searchQuery, setsearchQuery] = useState("")

const movies = [
    {id: 1, title: "John Wick", release_date: 2011},
    {id: 2, title: "The Butcher", release_date: 2021},
    {id: 3, title: "Terminator", release_date: 2019}
]
const handlesearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setsearchQuery("")

}
    return <div className="home">
        <form onSubmit={handlesearch} className="search-form">
            <input 
            type="text" 
            className="search-input" 
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie => 
            <MovieCard movie={movie} key={movie.id}/> ))}
        </div>
    </div>
}

export default Home