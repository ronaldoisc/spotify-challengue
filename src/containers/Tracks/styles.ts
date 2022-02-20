import styled from 'styled-components';
import *  as globalStyles from './../../globals/stylesGlobals';
export const Container = styled.div`
align-items:center;
display:flex;
justify-content:center;
flex-direction:column;
text-align:center;

`;
export const Header = styled.div`

    & p{
        font-weight: bold; 
        font-size:1.5rem;
        padding:0;
        margin:0;
    }
    & h1{
        font-size:3rem;
        font-weight: bold;
        padding:0;
        margin:0;
    }

`;

export const HeaderFooter = styled.div`
display:flex;
justify-content:center;
& span{
    margin:10px;
}
`;

export const TrackContent = styled.iframe`
height:70vh;
width:98vw;
`;

export const Table = styled.table`
width:100%;
text-align:center;
border-collapse: collapse;
& tr{
    height:90px;
}
& thead, tr {
    border: 3px solid white; 
  }

& tbody :hover{
     background-color: ${props => props.theme.colors.grayLight};
     opacity:0.9; 
}
& tbody tr td a {
   color:white;
   text-decoration:none;
   &:hover{
    text-decoration:underline;
   }
}
& td audio{
    width:150px;
    @media ${globalStyles.device.laptop} {
        width: 300px;
      }
  }
`;