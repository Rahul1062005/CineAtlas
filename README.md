# 🎬 CineAtlas

A comprehensive movie database application that showcases directors and their films from around the world. Built with modern web technologies, CineAtlas provides an elegant interface to explore cinematic masterpieces.

![CineAtlas Preview](https://images.unsplash.com/photo-1489599735734-79b4d4c4b5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)

## 🌟 Features

### 🎭 Director Showcase
- **Global Representation**: Directors from every continent including Christopher Nolan (UK), Quentin Tarantino (USA), Martin Scorsese (USA), Hayao Miyazaki (Japan), Bong Joon-ho (South Korea), Guillermo del Toro (Mexico), Abbas Kiarostami (Iran), and Satyajit Ray (India)
- **Detailed Profiles**: Birth year, country of origin, and photo for each director
- **Search Functionality**: Find directors by name
- **Country Filtering**: Browse directors by their country of origin

### 🎥 Movie Collection
- **Diverse Filmography**: Over 20+ movies spanning different genres, eras, and cultures
- **Rich Metadata**: Year, rating, popularity score, and director information
- **Poster Integration**: Automatic poster fetching from OMDB API
- **Search & Sort**: Find movies by title and sort by release year

### 🎨 Modern UI/UX
- **Cinematic Design**: Full-screen movie theater background
- **Glass Morphism**: Modern card designs with blur effects
- **Responsive Layout**: Works perfectly on all device sizes
- **Smooth Animations**: Elegant hover effects and transitions
- **Dark Theme**: Easy on the eyes with beautiful gradients

### 🔧 Technical Features
- **RESTful API**: Well-structured backend with Express.js
- **Database Integration**: MongoDB with Mongoose ODM
- **External APIs**: OMDB integration for movie data and posters
- **Modern Frontend**: React with Vite for lightning-fast development
- **Component Architecture**: Modular and maintainable code structure

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Axios** - HTTP client for API calls
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Modern styling with gradients and animations
- **ESLint** - Code linting

### External Services
- **OMDB API** - Movie data and poster images
- **MongoDB Atlas** - Cloud database hosting

## 📁 Project Structure

```
CineAtlas/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── models/
│   │   ├── Director.js          # Director schema
│   │   └── Movie.js             # Movie schema
│   ├── routes/
│   │   ├── directors.js         # Director API routes
│   │   └── movies.js            # Movie API routes
│   ├── scripts/
│   │   └── populatePosters.js   # Poster population script
│   ├── utils/
│   │   └── omdb.js              # OMDB API utilities
│   ├── server.js                # Main server file
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DirectorCard.jsx # Director card component
│   │   │   ├── MovieCard.jsx    # Movie card component
│   │   │   └── SearchBar.jsx    # Search functionality
│   │   ├── pages/
│   │   │   ├── Director.jsx     # Director detail page
│   │   │   ├── Home.jsx         # Homepage
│   │   │   ├── Movie.jsx        # Movie detail page
│   │   │   ├── Movies.jsx       # Movies listing page
│   │   │   └── Search.jsx       # Search results page
│   │   ├── App.jsx              # Main app component
│   │   ├── App.css              # Global styles
│   │   ├── main.jsx             # App entry point
│   │   └── index.css            # Base styles
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
└── README.md                     # Project README
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- OMDB API key (free from [omdbapi.com](http://www.omdbapi.com/apikey.aspx))

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   - Copy `.env.example` to `.env`
   - Add your MongoDB connection string:
     ```
     MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/cineatlas
     ```
   - Add your OMDB API key:
     ```
     OMDB_API_KEY=your_api_key_here
     ```

4. **Start the backend server:**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📊 API Endpoints

### Directors
- `GET /directors` - Get all directors
- `GET /directors/country/:country` - Get directors by country
- `GET /directors/search/:name` - Search directors by name
- `POST /directors` - Add new director

### Movies
- `GET /movies` - Get all movies
- `GET /movies/search/:title` - Search movies by title
- `GET /movies/sort/year` - Get movies sorted by year
- `POST /movies` - Add new movie
- `PATCH /movies/:id/poster` - Update movie poster

## 🎯 Usage

1. **Homepage**: Browse featured directors and movies
2. **Director Pages**: Click on director cards to see their filmography
3. **Movie Details**: Click on movie cards for detailed information
4. **Search**: Use the search bar to find specific directors or movies
5. **Navigation**: Use the navbar to navigate between different sections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run populate-posters` - Fetch and add posters for all movies

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌍 Deployment

### Backend Deployment
- **Recommended**: Railway, Render, or Heroku
- **Database**: MongoDB Atlas for cloud hosting

### Frontend Deployment
- **Recommended**: Vercel, Netlify, or GitHub Pages
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OMDB API** for movie data and posters
- **Unsplash** for background images
- **React & Vite** communities for excellent documentation
- **Open source contributors** for inspiring this project

## 📞 Contact

**Rahul** - [GitHub](https://github.com/Rahul1062005)

Project Link: [https://github.com/Rahul1062005/CineAtlas](https://github.com/Rahul1062005/CineAtlas)

---

⭐ **Star this repo if you found it helpful!** ⭐