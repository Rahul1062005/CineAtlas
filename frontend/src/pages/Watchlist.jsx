import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Watchlist() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const loadWatchlist = async () => {

      const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

      const movieData = await Promise.all(
        watchlist.map(id =>
          fetch(`http://localhost:5000/movies/${id}`)
            .then(res => res.json())
            .then(data => data && !data.error ? data : null)
            .catch(error => {
              console.error(`Failed to fetch movie ${id}:`, error);
              return null;
            })
        )
      );

      setMovies(movieData.filter(movie => movie !== null));
    };

    loadWatchlist();

  }, []);

  return (
    <div className="container">

      <h1>📌 My Watchlist</h1>

      {movies.length === 0 && <p>No movies in watchlist yet.</p>}

      <div className="movie-grid">

        {movies.map(movie => (
          <Link key={movie._id} to={`/movie/${movie._id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}

      </div>

    </div>
  );
}

export default Watchlist;