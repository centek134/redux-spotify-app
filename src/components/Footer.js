import React from 'react'
import styled from 'styled-components';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

const Foot = styled.footer`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    height: 70px;
    padding: 15px;
    background-color: #282828;
`;

const FootLeft = styled.div`
    height: 100%;
    flex: 0.3;
`;
const FootCenter = styled.div`
    height: 100%;
    flex: 0.4;
    color: #ffffff;
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
`;
const FootRight = styled.div`
    height: 100%;
    flex: 0.3;
`;

const Footer = () => {
    return (
        <Foot>
            <FootLeft>
                <p>Album</p>
            </FootLeft>


            <FootCenter>
                <ShuffleIcon/>
                <SkipPreviousIcon/>
                <PlayCircleOutlineIcon/>
                <SkipNextIcon/>
                <RepeatIcon/>
            </FootCenter>


            <FootRight>
                
            </FootRight>

        </Foot>
    )
};

export default Footer;
