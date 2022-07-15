import React from 'react'
import { MainHeader, HeaderContainer } from './style'
import Form from "./Form"

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>
        Food App
      </MainHeader>
      <Form/>
    </HeaderContainer>
  )
}

export default Header