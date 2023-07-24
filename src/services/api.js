import axios from "axios";
const API_KEY='41b8f9437bf3f899281f8a3f9bdc0891'
const BASE_URL='https://api.themoviedb.org/3'

export async function getTrending(){
    const res=await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    
    return res.data
}
export async function getMovieInfo(id){
    const res=await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    return res.data
}
export async function getMovieInfoWithParams(id, param){
    const res=await axios.get(`${BASE_URL}/movie/${id}/${param}?api_key=${API_KEY}`)
    console.log(res.data)
    return res.data
    
}
export async function getSearchMovie(query){
    const res=await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    return res.data

}