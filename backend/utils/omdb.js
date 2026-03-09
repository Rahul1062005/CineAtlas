const axios = require('axios');

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_BASE_URL = 'http://www.omdbapi.com/';

// Search for a movie and get poster using OMDB
async function getMoviePoster(movieTitle, year = null) {
  try {
    let searchQuery = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(movieTitle)}`;

    if (year) {
      searchQuery += `&y=${year}`;
    }

    const response = await axios.get(searchQuery);
    const data = response.data;

    if (data.Response === 'True' && data.Poster && data.Poster !== 'N/A') {
      return data.Poster;
    }

    return null; // No poster found
  } catch (error) {
    console.error('Error fetching movie poster from OMDB:', error.message);
    return null;
  }
}

// Get movie details including poster using OMDB
async function getMovieDetails(movieTitle, year = null) {
  try {
    let searchQuery = `${OMDB_BASE_URL}?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(movieTitle)}`;

    if (year) {
      searchQuery += `&y=${year}`;
    }

    const response = await axios.get(searchQuery);
    const data = response.data;

    if (data.Response === 'True') {
      return {
        title: data.Title,
        year: data.Year ? parseInt(data.Year) : null,
        poster: data.Poster && data.Poster !== 'N/A' ? data.Poster : null,
        imdb_id: data.imdbID,
        plot: data.Plot,
        rating: data.imdbRating ? parseFloat(data.imdbRating) : null,
        genre: data.Genre,
        director: data.Director
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching movie details from OMDB:', error.message);
    return null;
  }
}

module.exports = {
  getMoviePoster,
  getMovieDetails
};