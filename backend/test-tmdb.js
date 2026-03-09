require('dotenv').config();
const { getMoviePoster, getMovieDetails } = require('./utils/omdb');

async function testTMDB() {
  try {
    console.log('Testing TMDB API integration...\n');

    // Test getting poster for a popular movie
    console.log('1. Getting poster for "Inception":');
    const posterUrl = await getMoviePoster('Inception', 2010);
    console.log('Poster URL:', posterUrl);
    console.log('');

    // Test getting full movie details
    console.log('2. Getting details for "The Dark Knight":');
    const movieDetails = await getMovieDetails('The Dark Knight', 2008);
    console.log('Movie Details:', JSON.stringify(movieDetails, null, 2));
    console.log('');

    console.log('✅ TMDB integration test completed!');
  } catch (error) {
    console.error('❌ TMDB test failed:', error.message);
  }
}

// Run test if this file is executed directly
if (require.main === module) {
  testTMDB();
}

module.exports = { testTMDB };