import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState("");
  const [watched, setWatched] = useState(false);

  useEffect(() => {

    fetch(`http://localhost:5000/movies/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) {
          setMovie(data);
        } else {
          setMovie(null);
        }
      })
      .catch(error => {
        console.error("Failed to fetch movie:", error);
        setMovie(null);
      });

  }, [id]);

  const addToWatchlist = () => {

    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (!watchlist.includes(movie._id)) {
      watchlist.push(movie._id);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      alert("Added to Watchlist 📌");
    }

  };

  const markWatched = () => {

    setWatched(true);

    const watchedMovies = JSON.parse(localStorage.getItem("watched")) || [];

    watchedMovies.push(movie._id);

    localStorage.setItem("watched", JSON.stringify(watchedMovies));

  };

  const saveRating = () => {

    const ratings = JSON.parse(localStorage.getItem("ratings")) || {};

    ratings[movie._id] = rating;

    localStorage.setItem("ratings", JSON.stringify(ratings));

    alert("Rating saved ⭐");

  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container">

      <div className="movie-hero" style={movie.poster ? { backgroundImage: `url(${movie.poster})` } : {}}>
        <div className="movie-hero-overlay">
          <div className="movie-hero-content">
            <h1>{movie.title}</h1>
            <p>{movie.year} • {movie.director.name} • {movie.country}</p>
          </div>
        </div>
      </div>

      <div className="movie-details">

        <p><strong>Director:</strong> {movie.director.name}</p>

        <p><strong>Country:</strong> {movie.country}</p>

        <p><strong>Rating:</strong> ⭐ {movie.rating}</p>

        <p><strong>Popularity:</strong> {movie.popularity}</p>

      </div>

      <div className="movie-actions">

        <button onClick={addToWatchlist}>📌 Add to Watchlist</button>

        <button onClick={markWatched}>
          {watched ? "✔ Watched" : "Mark as Watched"}
        </button>

      </div>

      <div className="rating-section">

        <h3>Your Rating</h3>

        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button onClick={saveRating}>Save Rating ⭐</button>

      </div>

    </div>
  );
}

export default Movie;