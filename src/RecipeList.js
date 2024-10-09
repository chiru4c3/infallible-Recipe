// RecipeList.js
import React from "react";
import RecipeCard from "./RecipeCard";
import { Box, Typography } from "@mui/material";

const RecipeList = ({ recipes, favorites = [], toggleFavorite }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Recipes
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        flexWrap="wrap"
        justifyContent="flex-start"
        gap={2}
      >
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
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
                isFavorite={favorites.some(
                  (fav) => fav.idMeal === recipe.idMeal
                )}
              />
            </Box>
          ))
        ) : (
          <Typography>No recipes found.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default RecipeList;
