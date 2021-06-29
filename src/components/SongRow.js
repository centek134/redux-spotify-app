import React from 'react'
import styled from 'styled-components';
const RowSong = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    margin-left: 20px;
    color: #ffffff;

    &:hover{
        cursor: pointer;
        background-color: black;
        opacity: 0.8;
    }

    & > img{
        width: 40px;
        height: 40px;
    }

    & .info{
       margin-left: 20px;
    }
    & .info > h1{
        font-size: 16px;
    }
    & .info > p{
        font-size: 14px;
        margin-top: 3px;
        color: gray;
    }

`;


function SongRow({track}) {
    return (
        <RowSong>
            <img src={track.album.images[0].url} alt=""/>
            <div className = "info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </RowSong>
    )
}

export default SongRow
