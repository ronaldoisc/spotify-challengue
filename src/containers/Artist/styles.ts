import styled from 'styled-components';
import *  as globalStyles from './../../globals/stylesGlobals';

export const Container = styled.div`
align-items:center;
background-color:${props => props.theme.colors.grayLight};
display:flex;
justify-content:space-evenly;
flex-direction:column;
padding:1rem;

@media ${globalStyles.device.tablet} {
    flex-direction:row;
  }
`;
export const Image=styled.img`
border-radius:100%;
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