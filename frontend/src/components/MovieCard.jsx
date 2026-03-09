import { Link } from "react-router-dom";

function MovieCard({ movie, link }) {

  const content = (
    <>
      {movie.poster ? (
        <img src={movie.poster} alt={movie.title} className="movie-card-poster" />
      ) : (
        <div className="movie-card-placeholder">
          <span>🎥</span>
        </div>
      )}
      <div className="movie-card-content">
        <h3>{movie.title}</h3>
        <p>📅 {movie.year}</p>
        <p>⭐ {movie.rating}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <Link to={link} className="movie-card">
        {content}
      </Link>
    );
  }

  return (
    <div className="movie-card">
      {content}
    </div>
  );
}

export default MovieCard;