import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { MainHeader } from "../../components/header/HeaderStyle";
import RecipeCardComp from "../../components/header/RecipeCardComp";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyle";
import homeSvg from "../../assets/home.svg"

const mealType = ["Select Meal Type","Breakfeast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "aca225d3";
const APP_KEY = "8c634bfd4eccd28f898c2c856341c91a";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealType[0].toLowerCase());
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setRecipes(result.data.hits);
      console.log(recipes);
      setQuery("");
      
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        mealType={mealType}
        meal={meal}
        setMeal={setMeal}
        getData={getData}
      />
      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => <RecipeCardComp key={index} recipe={recipe.recipe}/>)}
        </MainContainer>
      ) : 
      <ImgDiv>
         <HomeImg src ={homeSvg}/>
      </ImgDiv>} 
      
    </div>
  );
};

export default Home;
