# CineAtlas Backend

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   - Copy `.env.example` to `.env`
   - Add your MongoDB connection string
   - Get a free OMDB API key from [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)

3. **OMDB API Setup:**
   - Go to [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
   - Sign up for a free account
   - Request an API key (free tier: 1,000 calls/day)
   - Add the API key to your `.env` file as `OMDB_API_KEY`

## Running the App

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Populating Movie Posters

After adding movies to your database, run:

```bash
npm run populate-posters
```

This will automatically fetch and add poster images for all movies that don't have them.

## API Endpoints

### Movies
- `GET /movies` - Get all movies
- `GET /movies/:id` - Get movie by ID
- `PATCH /movies/:id/poster` - Update movie poster from OMDB API
- `PATCH /movies/:id/set-poster` - Manually set poster URL (body: { posterUrl: "..." })
- `POST /movies` - Create new movie
- `GET /movies/search/:title` - Search movies by title

### Directors
- `GET /directors` - Get all directors
- `GET /directors/:id` - Get director by ID
- `POST /directors` - Create new director
- `GET /directors/search/:name` - Search directors by name

## OMDB Integration

The app integrates with the Open Movie Database (OMDB) to automatically fetch movie posters. OMDB provides high-quality poster images and movie data.

- Posters are stored as direct URLs from OMDB
- Free tier allows 1,000 API calls per day
- If no poster is found, the app falls back to a gradient placeholder

## Alternative APIs

If OMDB doesn't work for you, here are other options:

### 1. **MovieGlu API**
- Paid service with comprehensive movie data
- High-quality posters and images
- Commercial use allowed

### 2. **Utelly API** (now JustWatch)
- Free tier available
- Shows where movies are streaming
- Limited poster data

### 3. **FanArt.tv**
- Free for personal use
- High-quality movie posters and artwork
- Requires API key

### 4. **Manual Upload**
- Upload poster images to your own server (Imgur, Cloudinary, etc.)
- Store the URLs in your database
- Full control over images

To switch APIs, simply modify the `utils/omdb.js` file with the new API endpoints and authentication.

## Testing OMDB Integration

Test the OMDB API connection:

```bash
npm run test-tmdb
```

This will fetch poster URLs for sample movies to verify your API key is working.