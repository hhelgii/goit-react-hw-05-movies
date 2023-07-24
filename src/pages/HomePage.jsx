import React, { useEffect, useState } from "react";
import MovieList from "components/moviesList/MoviesList";
import { getTrending } from "services/api";
const HomePage=()=>{
    const [trendyMovies, setTrendyMovies]=useState([])
   
    useEffect(()=>{
        const fetchTrends=async()=>{
            try {
                const movies=await getTrending()
            setTrendyMovies(movies.results)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchTrends()
    }, [])
    // console.log(trendyMovies)
    return (
        <>
        <h1>Trendy Movies</h1>
        {trendyMovies&&<MovieList movies={trendyMovies}/>}
        </>
    )
}
export default HomePage