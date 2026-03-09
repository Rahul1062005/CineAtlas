const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");


// SEARCH MOVIES
router.get("/search/:title", async (req, res) => {
  try {
    const movies = await Movie.find({
      title: { $regex: req.params.title, $options: "i" }
    }).populate("director");

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to search movies" });
  }
});


// Add a movie
router.post("/", async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.json(savedMovie);
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie" });
  }
});


// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find().populate("director");
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});


// Get movies sorted by release year (Oldest → Newest)
router.get("/sort/year", async (req, res) => {
  try {
    const movies = await Movie.find().sort({ year: 1 }).populate("director");
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to sort movies by year" });
  }
});


// Get movies sorted by popularity
router.get("/sort/popularity", async (req, res) => {
  try {
    const movies = await Movie.find().sort({ popularity: -1 }).populate("director");
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to sort movies by popularity" });
  }
});

// Get movies by director
router.get("/director/:id", async (req, res) => {
  try {
    const movies = await Movie.find({ director: req.params.id }).populate("director");
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies by director" });
  }
});

// Get movie by ID
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("director");
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie" });
  }
});

// Update movie poster manually
router.patch("/:id/set-poster", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    const { posterUrl } = req.body;
    if (!posterUrl) {
      return res.status(400).json({ error: "Poster URL is required" });
    }

    movie.poster = posterUrl;
    await movie.save();
    res.json({ message: "Poster updated manually", poster: posterUrl });
  } catch (error) {
    res.status(500).json({ error: "Failed to update poster" });
  }
});


// Get movies by director ID
router.get("/director/:directorId", async (req, res) => {
  try {
    const movies = await Movie.find({
      director: req.params.directorId
    }).populate("director");

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies by director" });
  }
});

// Get movie by ID
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("director");

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie" });
  }
});


module.exports = router;