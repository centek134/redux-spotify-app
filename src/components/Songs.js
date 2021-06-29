import React from 'react'
import styled from 'styled-components';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useStateProviderValue } from "../StateProvider";
import SongRow from './SongRow';


const SongsBody = styled.section`
    margin: 20px -30px;
`;
const IconBody = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    & svg{
        margin-right: 20px;
    }
    & svg.play_btn{
        font-size: 80px !important;
        margin: 20px 20px 20px 50px;
        &:hover{
            transition: 100ms transform ease-in;
            transform: scale(1.08);
        }
    }
`;
export const Songs = () => {

    const [{discover_weekly}, dispatch] = useStateProviderValue();

    return (
        <React.Fragment>
            <SongsBody>

            <IconBody>
                <PlayCircleFilledIcon className = "play_btn"/>
                <FavoriteIcon/>
                <MoreHorizIcon/>
            </IconBody>
            {discover_weekly?.tracks.items.map( (item, i) => {
                return <SongRow key={i} track = {item.track} />
            })}
            </SongsBody>
        </React.Fragment>
    )
}
