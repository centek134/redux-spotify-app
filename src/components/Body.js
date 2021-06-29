import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { Songs } from "./Songs";

const MyBody = styled.main`
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(32, 26, 40, 1) 74%,
    rgba(91, 73, 115, 1) 100%
  );
  padding: 30px;
  height: 100vh;
  overflow-y: overlay;

  &::-webkit-scrollbar{
    display: none;
  }
`;


const Body = ({ spotify }) => {

  return (
    <MyBody>
      <Header spotify={spotify} />
      <Banner spotify = {spotify}/>
      <Songs spotify = {spotify}/>
    </MyBody>

  );
};

export default Body;
