import React from 'react'
import styled from 'styled-components';

const Table = styled.table`
width:80%;
text-align:center;
border-collapse: collapse;
& tr{
    height:90px;
}
 & thead, tr {
    border: 3px solid white;
   
    
  }
`;
export const TableTracks = ({tracks}) => {

 
    return (
        <Table>
            <thead>
                <tr>
                    <th>Artist</th>
                    <th>Song</th>
                    <th>Preview view</th>
                </tr>
            </thead>
            <tbody>
               {
                   tracks.map(track=>{
                   return  <tr key={track.id}>
                    <td>{track.artist.name}</td>
                    <td>{track.uri}</td>
                    <td>
                   
                    {/* <iframe src={track.uri} title={track.name}  >
                         
                         </iframe> */}
                        {/* {track.previewUrl} */}
                    <audio src={track.previewUrl}  controls></audio>
                        
                    </td>
                    </tr>
              
                   })
               }
            </tbody>
        </Table>


    )
}
