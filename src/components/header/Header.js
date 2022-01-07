import React from 'react'
import Form from './Form'
import { HeaderContainer, MainHeader } from './HeaderStyle'

const Header = ({query,setQuery,mealType,meal,setMeal,getData}) => {
    return (
      <HeaderContainer>
        <MainHeader>Food Search</MainHeader>
        <Form
          query={query}
          setQuery={setQuery}
          mealType={mealType}
          meal={meal}
          setMeal={setMeal}
          getData={getData}
        />
      </HeaderContainer>
    );
}

export default Header
