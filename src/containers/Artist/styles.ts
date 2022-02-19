import styled from 'styled-components';
import *  as globalStyles from './../../globals/stylesGlobals';

export const Container = styled.div`
background-color:rgb(71,71,71);
display:flex;
flex-direction:column;

@media ${globalStyles.device.tablet} {
    flex-direction:row;
  }
padding:1rem;
align-items:center;
justify-content:space-evenly;
`;


export const ArtistCard = styled.div`
display:flex;
flex-direction:column;
align-items:center;

& h1{
    font-size:1.5rem;
    @media ${globalStyles.device.tablet} {
        font-size:4rem;
      }
 
}
`;
export const ArtistDetails = styled.div`

display:flex;
flex-direction:row;
align-items:center;

& p{
    
    font-size:1rem;
    @media ${globalStyles.device.tablet} {
        font-size:1.4rem;
      }
    margin:20px;
    & i{
       color:yellow;
    }
}

`;