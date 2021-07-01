import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useStateProviderValue } from "../StateProvider";

const Head = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const HeadLeft = styled.div`
  flex: 0.5;
  background-color: #ffffff;
  color: gray;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  align-items: center;

  & > input {
    min-width: 60px;
    border: none;
    width: 100%;
    outline: none;
  }
`;
const HeadRight = styled.div`
  display: flex;
  align-items: center;
  & > h4 {
    margin-left: 10px;
  }
`;

export const Header = () => {
  const [{ user, dispatch }] = useStateProviderValue();
  return (
    <Head>
      <HeadLeft>
        <SearchIcon />
        <input placeholder="search for a song of artists" />
      </HeadLeft>
      <HeadRight>
        <Avatar src={user?.images[0]?.url} alt="TO" />
        <h4>{user?.display_name}</h4>
      </HeadRight>
    </Head>
  );
};
