import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);

    const fetchResults = async () => {
      try {
        const movieRes = await fetch(`http://localhost:5000/movies/search/${query}`);
        const movieData = await movieRes.json();

        const directorRes = await fetch(`http://localhost:5000/directors/search/${query}`);
        const directorData = await directorRes.json();

        const formatted = [
          ...(Array.isArray(movieData) ? movieData.map(m => ({
            id: m._id,
            name: m.title,
            type: "movie",
            details: `${m.year} • ${m.director.name}`
          })) : []),
          ...(Array.isArray(directorData) ? directorData.map(d => ({
            id: d._id,
            name: d.name,
            type: "director",
            details: d.country
          })) : [])
        ];

        setResults(formatted);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="container">
      <h1>Search Results for "{query}"</h1>

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && query.length >= 2 && (
        <p>No results found for "{query}"</p>
      )}

      <div className="search-results-grid">
        {results.map((item, index) => (
          <Link
            key={index}
            to={item.type === "movie" ? `/movie/${item.id}` : `/director/${item.id}`}
            className="search-result-item"
          >
            <h3>{item.name}</h3>
            <p>{item.details}</p>
            <span className="result-type">{item.type}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;