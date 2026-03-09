require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const { getMoviePoster } = require('../utils/omdb');

const connectDB = require('../config/db');
connectDB();

async function populatePosters() {
  try {
    console.log('Starting poster population...');

    // Get all movies without posters
    const moviesWithoutPosters = await Movie.find({ poster: { $exists: false } });

    console.log(`Found ${moviesWithoutPosters.length} movies without posters`);

    for (const movie of moviesWithoutPosters) {
      console.log(`Fetching poster for: ${movie.title} (${movie.year})`);

      const posterUrl = await getMoviePoster(movie.title, movie.year);

      if (posterUrl) {
        movie.poster = posterUrl;
        await movie.save();
        console.log(`✅ Added poster for: ${movie.title}`);
      } else {
        console.log(`❌ No poster found for: ${movie.title}`);
      }

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('Poster population completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error populating posters:', error);
    process.exit(1);
  }
}

// Run the script
populatePosters();