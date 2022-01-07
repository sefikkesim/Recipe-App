import React from "react";
import defaultImage from "../../assets/default-image.jpg"
import { RecipeCard, RecipeHeader, RecipeImage } from "../../pages/home/HomeStyle";
import { Button } from "./HeaderStyle";

const RecipeCardComp = ({recipe}) => {
   const {label,image} = recipe
  
  return (
    <RecipeCard>
      <RecipeHeader>{label}</RecipeHeader>
      <RecipeImage src={image ? image : defaultImage}/>
      <Button > Read More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
