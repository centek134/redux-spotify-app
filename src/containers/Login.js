import React from "react";
import  styled  from "styled-components";
import  {loginUrl}  from "../spotify";

const LoginScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LoginHeader = styled.h1`
  width: 100%;
  margin: 0 0 50px 0;
  color: #fff;
  font-size: 128px;
  text-align: center;

`;

const LoginBtn = styled.button`
  padding: 15px 25px;
  font-size: 26px;
  color: #fff;
  background-color: #32e26a;
  outline: none;
  border-radius: 50px;
  border: none;
`;
const LoginAnchor = styled.a`
  width: 100%;
  height: 100%;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

const Login = () => {
  return (
    <LoginScreen>
      <LoginHeader>Spotify</LoginHeader>
      <LoginBtn>
        <LoginAnchor href={loginUrl}>LOGIN TO SPOTIFY</LoginAnchor>
      </LoginBtn>
    </LoginScreen>
  );
};

export default Login;
