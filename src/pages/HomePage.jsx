import React, { useEffect, useState } from "react";
import MovieList from "components/moviesList/MoviesList";
import { getTrending } from "services/api";
import css from './homeAndMoviesPage.module.css'
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
        <div className={css.homePage}>
        <h1 className={css.title}>Trendy Movies</h1>
        {trendyMovies&&<MovieList movies={trendyMovies}/>}
        </div>
    )
}
export default HomePage