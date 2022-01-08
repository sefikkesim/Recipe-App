import React from "react";
import {useNavigate} from "react-router-dom"
import defaultImage from "../../assets/default-image.jpg"
import { RecipeCard, RecipeHeader, RecipeImage } from "../../pages/home/HomeStyle";
import { Button } from "./HeaderStyle";

const RecipeCardComp = ({recipe}) => {
  const navigate = useNavigate()

  const readMoreHadlerClick= ()=>{
    navigate("/details",{state:{recipe}})
  }
   const {label,image} = recipe
  
  return (
    <RecipeCard>
      <RecipeHeader>{label}</RecipeHeader>
      <RecipeImage src={image ? image : defaultImage}/>
      <Button onClick={readMoreHadlerClick}> Read More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
