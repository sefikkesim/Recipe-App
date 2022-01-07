import React from 'react'
import { Button, FoodInput, FormContainer, Select } from './HeaderStyle'

const Form = ({ query, setQuery, mealType, meal, setMeal,getData }) => {
    const handleSubmit = (e)=>{
        e.preventDefault()
        getData()
    }
   
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput type="text" value={query} placeholder="Search " onChange={(e)=> setQuery(e.target.value)}/>
      <Button type="submit"> Search</Button>
      <Select>
          {
              mealType?.map((item,index)=>{
                return  <option key ={index} >{item}</option>
              })
          }
      </Select>
    </FormContainer>
  );
};

export default Form
