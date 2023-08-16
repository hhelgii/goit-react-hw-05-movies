import axios from 'axios';
const API_KEY = '41b8f9437bf3f899281f8a3f9bdc0891';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const GENRES_KEY = 'genres';
export async function getTrending() {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  console.log(res.data);
  return res.data;
}
export async function getMovieInfo(id) {
  const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return res.data;
}
export async function getMovieInfoWithParams(id, param) {
  const res = await axios.get(
    `${BASE_URL}/movie/${id}/${param}?api_key=${API_KEY}`
  );

  return res.data;
}
export async function getSearchMovie(query) {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data;
}




export async function getGenresData() {
  const response = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  console.log(response.data.genres)
  return response.data.genres;
}
export async function getGenres() {
  let genres = localStorage.getItem(GENRES_KEY);

  if (!genres) {
    try {
      genres = await getGenresData();
      console.log(genres);
      localStorage.setItem(GENRES_KEY, JSON.stringify(genres));
    } catch (error) {
      console.log(error.message)
    }
  } else {
    genres = JSON.parse(genres);
  }

  return genres;
}

export function validateGenres(genresArray, genresData) {
  try {
    const allGenres = Array.from(genresData);

    const genresNames = genresArray.map(genreId => {
      const genre = allGenres.find(genre => genre.id === genreId);
      return genre ? genre.name : '';
    });
    return trimGenres(genresNames);
  } catch (error) {
    console.log(error.message)
    return '';
  }
}

function trimGenres(genresArray) {
  let genresString = '';
  if (genresArray.length > 2) {
    genresString = genresArray.slice(0, 2).join(', ');
  } else {
    genresString = genresArray.join(', ');
  }
  return genresString;
}