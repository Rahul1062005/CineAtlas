const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
connectDB();

const express = require("express");
const cors = require("cors");

const directorRoutes = require("./routes/directors");
const movieRoutes = require("./routes/movies");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/directors", directorRoutes);
app.use("/movies", movieRoutes);

app.get("/", (req, res) => {
    res.send("CineAtlas API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});