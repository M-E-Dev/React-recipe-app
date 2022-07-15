import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './style'

const Form = () => {
  return (
    <FormContainer>
      <FoodInput type="text" placeholder='Search' />
      <Button type='submit' ></Button>
      <Select name='mealTypes' id='mealTypes' ></Select>
    </FormContainer>
  )
}

export default Form
