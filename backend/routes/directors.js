const express = require("express");
const router = express.Router();
const Director = require("../models/Director");

// Add new director
router.post("/", async (req, res) => {
  try {
    const director = new Director(req.body);
    const savedDirector = await director.save();
    res.json(savedDirector);
  } catch (error) {
    res.status(500).json({ error: "Failed to add director" });
  }
});

// Get all directors
router.get("/", async (req, res) => {
  try {
    const directors = await Director.find();
    res.json(directors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch directors" });
  }
});

// Get directors by country
router.get("/country/:country", async (req, res) => {
  try {
    const countryName = req.params.country;

    const directors = await Director.find({
      country: countryName
    });

    res.json(directors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch directors by country" });
  }
});

// Search directors
router.get("/search/:name", async (req, res) => {
  try {
    const directors = await Director.find({
      name: { $regex: req.params.name, $options: "i" }
    });

    res.json(directors);
  } catch (error) {
    res.status(500).json({ error: "Failed to search directors" });
  }
});

// Get director by ID
router.get("/:id", async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);
    if (!director) {
      return res.status(404).json({ error: "Director not found" });
    }
    res.json(director);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch director" });
  }
});

// Update director photo
router.patch("/:id/photo", async (req, res) => {
  try {
    const { photo } = req.body;
    const director = await Director.findByIdAndUpdate(
      req.params.id,
      { photo },
      { new: true }
    );
    if (!director) {
      return res.status(404).json({ error: "Director not found" });
    }
    res.json(director);
  } catch (error) {
    res.status(500).json({ error: "Failed to update director photo" });
  }
});

// Search movies
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

// Search directors by country
router.get("/search-country/:country", async (req, res) => {
  try {
    const directors = await Director.find({
      country: { $regex: req.params.country, $options: "i" }
    });

    res.json(directors);
  } catch (error) {
    res.status(500).json({ error: "Failed to search directors by country" });
  }
});

// Get director by ID
router.get("/:id", async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);

    if (!director) {
      return res.status(404).json({ error: "Director not found" });
    }

    res.json(director);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch director" });
  }
});

module.exports = router;