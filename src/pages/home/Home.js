import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import { MainContainer, HomeImg, ImgDiv } from "./style";
import homeSvg from "../../assets/meal.png";
import RecipeCardComp from "./RecipeCardComp";


const APP_ID = "4e9f05eb";
const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
// const APP_ID = "bfbb3efc";
// const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
      // console.log(result.data.hits);
    } else {
      console.log("Fill the form...");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
      />
      {food ? (
        <MainContainer>
          {food.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg}/>
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
