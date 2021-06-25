import React from "react";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import styled from "styled-components";

const PlayerBody = styled.div`
  display: flex;
`;

function Player({ spotify }) {
  return (
    <React.Fragment>
      <PlayerBody>
        <Sidebar></Sidebar>
        <Body></Body>
      </PlayerBody>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Player;
