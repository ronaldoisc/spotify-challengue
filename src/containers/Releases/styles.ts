import styled from 'styled-components';
 
import *  as globalStyles from './../../globals/stylesGlobals';

export const Wrapper = styled.section`

display: flex;
flex-direction: row;
justify-content:space-between;
flex-wrap:wrap;
`;

export const Card = styled.div`
 background-color:rgb(23,23,23);
 margin:10px;
 
 @media ${globalStyles.device.mobileS} {
  width:100%;
}
@media ${globalStyles.device.mobileM} {
  width:80%;
}
@media ${globalStyles.device.mobileL} {
  width:45%;
}
@media ${globalStyles.device.tablet} {
  width:30%;
}
@media ${globalStyles.device.laptop} {
  width:20%;
}
@media ${globalStyles.device.desktop} {
  width:15%;
}



& h3{
   color:white;
   text-align:center
}
&:hover{
   cursor:pointer;
    background-color:rgb(30,30,30);
    transition:background-color 0.5s ease-out;
}
`;

export const CardFooter = styled.p`
display:flex;
justify-content:space-evenly;
flex-flow:column wrap;
align-items:center;

@media ${globalStyles.device.tablet} {
    flex-direction: row;
  }


& span{
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
    font-size:11px;
    background-color:rgb(30,215,96);
    border-radius:16px;
    color:white;
    text-align:center;
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
