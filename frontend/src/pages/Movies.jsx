import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          setMovies([]);
        }
      })
      .catch(error => {
        console.error("Failed to fetch movies:", error);
        setMovies([]);
      });
  }, []);

  return (
    <div className="container">
      <h1>All Movies</h1>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} link={`/movie/${movie._id}`} />
        ))}
      </div>
    </div>
  );
}

export default Movies;