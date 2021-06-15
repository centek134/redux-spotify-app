import React from 'react'
import styled from 'styled-components';

const Foot = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    padding: 15px;
    background-color: #282828;
`;

const Footer = () => {
    return (
        <Foot></Foot>
    )
};

export default Footer;
