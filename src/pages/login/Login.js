import React from "react";
import meal from "../../assets/meal.png";
import {
  LoginContainer,
  FormContainer,
  Header,
  StyledInput,
  StyledForm,
  StyledButton,
  StyledImg,
} from "./LoginStyle";

const Login = () => {

  const user = {username:"HARRY"}

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem("user", JSON.stringify(user))
    window.location.href="/home";
  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>Recipe Finder App</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="text" placeholder="password" required />
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
