import styled from "styled-components";

export const LoginContainer = styled.div`
  background-image: url("https://i.picsum.photos/id/365/5616/3744.jpg?hmac=m9Chefr19BelgN9G4ErJVFBbdvNmA_xlbd0CjATLwhM");
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 500px;
  min-width: 500px;
  height: 500px;
  background-color: rgba(205, 209, 228, 0.5); 
  border-radius: 3%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: rgb(175, 65, 84);
  font-family: "Girassol", sans-serif;
  font-size: 3rem;
`;

export const StyledInput = styled.input`
  height: 50px;
  font-size: 2rem;
  width: 250px;
  border-radius: 5px;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin: 1rem;
`;

export const StyledImg = styled.img`
  width: 150px;
  margin: 1rem;
`;
