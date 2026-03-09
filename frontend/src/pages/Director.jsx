import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Director() {

  const { id } = useParams();

  const [director, setDirector] = useState(null);
  const [movies, setMovies] = useState([]);

  const directorImages = {
    "Christopher Nolan":
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Christopher_Nolan_Cannes_2018.jpg",
    "Quentin Tarantino":
      "https://images6.alphacoders.com/115/1156134.jpg",
    "Martin Scorsese":
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Martin_Scorsese_Berlinale_2010.jpg",
    "Hayao Miyazaki":
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Hayao_Miyazaki.jpg"
  };

  useEffect(() => {

    fetch(`http://localhost:5000/directors/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) {
          setDirector(data);
        } else {
          setDirector(null);
        }
      })
      .catch(error => {
        console.error("Failed to fetch director:", error);
        setDirector(null);
      });

    fetch(`http://localhost:5000/movies/director/${id}`)
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

  }, [id]);

  if (!director) return <p>Loading...</p>;

  return (
  <div className="director-page">

    <div
      className="director-hero"
      style={{
        backgroundImage: `url(${directorImages[director.name]})`
      }}
    >

      <div className="director-overlay">

        <div className="director-content">

          <h1>{director.name}</h1>

          <p>Country: {director.country}</p>

          <p>Born: {director.birthYear}</p>

        </div>

      </div>

    </div>

    <div className="container">

      <h2>Movies</h2>

      <div className="movie-grid">

        {movies.map(movie => (
          <MovieCard key={movie._id} movie={movie} link={`/movie/${movie._id}`} />
        ))}

      </div>

    </div>

  </div>
);
}

export default Director;