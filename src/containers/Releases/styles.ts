import styled from 'styled-components';
 
import *  as globalStyles from './../../globals/stylesGlobals';

export const Wrapper = styled.section`

display: flex;
flex-direction: row;
justify-content:space-between;
flex-wrap:wrap;
`;



export const CardFooter = styled.div`
display:flex;
justify-content:space-evenly;
flex-flow:column wrap;
align-items:center;

@media ${globalStyles.device.tablet} {
    flex-direction: row;
  }


& span{
    font-weight:bold;
    color:black;
    font-size:12px;

    @media ${globalStyles.device.mobileS} {
        width: 90%;
      }
    @media ${globalStyles.device.tablet} {
        width: 30%;
      }
      @media ${globalStyles.device.laptop} {
        width: 30%;
      }
    
    
    margin:3px;
    padding:0.3rem;
    background-color:${props =>props.theme.colors.greenSpotify};
    border-radius:16px;
}
`;

export const Title = styled.h1`
font-size:2rem;
color:white;
text-align:center;
`;

export const Image = styled.img`
width:100%;
object-fit:cover
`;
