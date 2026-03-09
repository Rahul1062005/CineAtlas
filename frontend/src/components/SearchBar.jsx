import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const handleSearch = async (value) => {

    setQuery(value);

    if (value.length < 2) {
      setResults([]);
      return;
    }

    try {
      const movieRes = await fetch(`http://localhost:5000/movies/search/${value}`);
      const movieData = await movieRes.json();

      const directorRes = await fetch(`http://localhost:5000/directors/search/${value}`);
      const directorData = await directorRes.json();

      const formatted = [
        ...(Array.isArray(movieData) ? movieData.map(m => ({
          id: m._id,
          name: m.title,
          type: "movie"
        })) : []),
        ...(Array.isArray(directorData) ? directorData.map(d => ({
          id: d._id,
          name: d.name,
          type: "director"
        })) : [])
      ];

      setResults(formatted);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
    }
  };

  const handleClick = (item) => {

    setQuery("");
    setResults([]);

    if (item.type === "movie") {
      navigate(`/movie/${item.id}`);
    } else {
      navigate(`/director/${item.id}`);
    }

  };

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search movies or directors..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {results.length > 0 && (
        <div className="search-results">

          {results.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="search-item"
              onClick={() => handleClick(item)}
            >
              {item.name}
              <span className="type">{item.type}</span>
            </div>
          ))}

          <Link to={`/search?q=${query}`} className="see-all-link">
            See all results →
          </Link>

        </div>
      )}

    </div>
  );
}

export default SearchBar;