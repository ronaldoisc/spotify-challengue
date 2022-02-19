import styled from 'styled-components';
import  * as styles from '../../globals/stylesGlobals';

export const Wrapper = styled.section`

   display: flex;
   flex-direction: row;
   justify-content:space-between;
   flex-wrap:wrap;
   
`;

export const Card = styled.div`
 background-color:rgb(23,23,23);
 margin:10px;

 @media ${styles.device.mobileS} {
    width:100%;
  }
  @media ${styles.device.mobileM} {
    width:90%;
  }
  @media ${styles.device.mobileL} {
    width:45%;
  }
 @media ${styles.device.tablet} {
    width:30%;
  }
  @media ${styles.device.laptop} {
    width:20%;
  }
  @media ${styles.device.desktop} {
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

export const CardContent=styled.div`
text-align:center;
& h1{
  font-size:1rem;
}
`;
export const Image = styled.img`
width:100%;
object-fit:cover
`;
