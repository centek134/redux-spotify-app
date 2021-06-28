import React from 'react'
import styled from 'styled-components';
const RowSong = styled.div`
`;


function SongRow({track = "test"}) {
    return (
        <div>
            {track}
        </div>
    )
}

export default SongRow
