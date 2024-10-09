// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";
import Favorites from "./Favorites";
import { Box, TextField, Button, Typography } from "@mui/material";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Fetch recipes based on search term
  const fetchRecipes = async () => {
    try {
      setError(null); // Reset error before making a new request
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setRecipes(response.data.meals || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(
        "Something went wrong while fetching recipes. Please try again."
      );
    }
  };

  // Toggle favorite status of a recipe
  const toggleFavorite = (recipe) => {
    const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.idMeal !== recipe.idMeal));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 2 }}>
      <Typography variant="h4" gutterBottom align="center">
        Recipe Explorer
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 1 }}
        />
        <Button variant="contained" color="primary" onClick={fetchRecipes}>
          Search
        </Button>
      </Box>

      {/* Display error message */}
      {error && (
        <Typography color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {/* Pass the favorites array to RecipeList */}
      <RecipeList
        recipes={recipes}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
    </Box>
  );
};

export default App;
