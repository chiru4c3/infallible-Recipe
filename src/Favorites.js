// Favorites.js
import React from "react";
import RecipeCard from "./RecipeCard";
import { Box, Typography } from "@mui/material";

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Your Favorites
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        flexWrap="wrap"
        justifyContent="flex-start"
        gap={2}
      >
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <Box
              key={recipe.idMeal}
              sx={{
                flex: "1 1 calc(33.333% - 16px)",
                maxWidth: "calc(33.333% - 16px)",
              }}
            >
              <RecipeCard
                recipe={recipe}
                toggleFavorite={toggleFavorite}
                isFavorite={true} // Always true for favorites
              />
            </Box>
          ))
        ) : (
          <Typography>No favorites added yet.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Favorites;
