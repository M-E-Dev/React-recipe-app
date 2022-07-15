import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './style'

const Form = ({ setQuery, getData, mealTypes, setMeal }) => {
  return (
    <FormContainer>
      <FoodInput type="text" placeholder='Search' onChange={(e) => setQuery(e.target.value)  } />
      <Button type='submit' onChange={getData()} >Search</Button>
      <Select name='mealTypes' id='mealTypes' onChange={(e) => setMeal(e.target.value)} >
        { mealTypes.map((item, index) => 
        <option key={index} value={item.toLowerCase()} >{item}</option>) 
        }
      </Select>
    </FormContainer>
  )
}

export default Form
