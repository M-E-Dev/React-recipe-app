import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { RecipeCard, RecipeHeader, RecipeImage, Button } from './style'

const RecipeCardComp = ({recipe, index}) => {

  const navigate = useNavigate();
  // Linkte veri gönderme sıkıntı olduğu için navigasyonu bu şekilde yaptık...
  const moreClick = () => {
    navigate("/details", {state:{recipe}})
    // useNavigate ile gönderilen veri, ilgili sayfada useLocation ile alınır
  }

  return (
    <RecipeCard >
      <RecipeHeader>
        {recipe.label}
      </RecipeHeader>
      <RecipeImage src={recipe.image}/>
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  )
}

export default RecipeCardComp