import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DirectorCard from "../components/DirectorCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/directors")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setDirectors(data);
        } else {
          setDirectors([]);
        }
      })
      .catch(error => {
        console.error("Failed to fetch directors:", error);
        setDirectors([]);
      });
  }, []);

  return (
    <div className="container">
      <SearchBar />

      <h2>Directors</h2>

      <div className="director-grid">
        {directors.map((director) => (
          <DirectorCard key={director._id} director={director} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/movies" className="browse-link">
          Browse All Movies →
        </Link>
      </div>
    </div>
  );
}

export default Home;