import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Director from "./pages/Director";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import Watchlist from "./pages/Watchlist";
import Search from "./pages/Search";

function App() {

  return (
    <BrowserRouter>

      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">CineAtlas 🎬</Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/movies" className="nav-link">Movies</Link>
          <Link to="/watchlist" className="nav-link">Watchlist</Link>
        </div>
      </div>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/director/:id" element={<Director />} />

        <Route path="/movie/:id" element={<Movie />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/watchlist" element={<Watchlist />} />

        <Route path="/search" element={<Search />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;