import React from 'react'
import styled from 'styled-components';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

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
    color: #ffffff;
    display: flex;
    align-items: center;
    max-width: 400px;
`;

const AlbumImg = styled.img`
    height: 60px;
    width: 60px;
    object-fit: contain;
    margin-right: 20px;
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
    @media only screen and (max-width:850px){
        padding: 0 25px;
    }
    @media only screen and (max-width:550px){
        padding: 0;
    }
`;
const FootRight = styled.div`
    height: 100%;
    flex: 0.3;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AuthorName = styled.h4`
    @media only screen and (max-width:850px){
        font-size: 14px;
    }
`;
const AlbumName = styled.p`
    @media only screen and (max-width:850px){
        font-size: 10px;
    }
`;

const HoverStyles = styled.span`
    margin: 0 5px;
    &:hover{
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2) !important;
    }
`

const Footer = () => {
    return (
        <Foot>
            <FootLeft>
                <AlbumImg src = "https://www.thewrap.com/wp-content/uploads/2016/08/Rick-Astley-618x400.jpg" alt = ""/>
                <div>
                    <AuthorName>Rick Astley</AuthorName>
                    <AlbumName>Never Gonna Give You Up</AlbumName>
                </div>
            </FootLeft>


            <FootCenter>
                <HoverStyles>
                    <ShuffleIcon style = {{color:"green"}}/>
                </HoverStyles>
                <HoverStyles>
                    <SkipPreviousIcon/>
                </HoverStyles>
                <HoverStyles>
                    <PlayCircleOutlineIcon style = {{fontSize:"36px"}}/>
                </HoverStyles>
                <HoverStyles>
                    <SkipNextIcon/>
                </HoverStyles>
                <HoverStyles>
                    <RepeatIcon style = {{color:"green"}}/>
                </HoverStyles>
            </FootCenter>


            <FootRight>
                <Grid container spacing = {2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider style = {{color:"green"}}/>
                    </Grid>
                </Grid>
            </FootRight>

        </Foot>
    )
};

export default Footer;
