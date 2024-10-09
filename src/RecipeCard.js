// RecipeCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const RecipeCard = ({ recipe, toggleFavorite, isFavorite }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {recipe.strMeal}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => toggleFavorite(recipe)}
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
