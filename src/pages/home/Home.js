import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Header from '../../components/header/Header';

const mealType = ["Breakfeast","Lunch","Dinner","Snack","Teatime"]
const APP_ID = "aca225d3";
const APP_KEY = "8c634bfd4eccd28f898c2c856341c91a";

const Home = () => {
    const [query,setQuery]= useState("pizza")
    const [recipes,setRecipes] = useState("recipes")
    const [meal,setMeal] = useState(mealType[0].toLowerCase())
    const url =
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType${meal}`;

      const getData = async ()=>{
          if(query) {
           const result = await axios.get(url);
          console.log(result.data);   
          }
          
      }

      useEffect(()=>{
         getData(); 
      },[])
      
    return (
        <div>
            <Header
                query={query}
                setQuery={setQuery}
                mealType={mealType}
                meal={meal}
                setMeal={setMeal}
            />
        </div>
    )
}

export default Home
