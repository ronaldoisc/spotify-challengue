import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';


export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export const GlobalCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: rgb(18,18,18);
    color:white;
    font-family: 'Poppins';
  }
`;
export const Card = styled.div`
 background-color:${props => props.theme.colors.grayDark};
 margin:10px;
 text-align:center;
 @media ${device.mobileS} {
  width:100%;
}
@media ${device.mobileM} {
  width:100%;
}
@media ${device.mobileL} {
  width:45%;
}
@media ${device.tablet} {
  width:30%;
}
@media ${device.laptop} {
  width:20%;
}
@media ${device.desktop} {
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

export  const theme = {
  colors:{
    greenSpotify: "rgb(30,215,96)",
    grayLight: "rgb(39,38,38)",
    grayDark:"rgb(23,23,23)"

  }
  
};
