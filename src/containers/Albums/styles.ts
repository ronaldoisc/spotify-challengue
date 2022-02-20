import styled from 'styled-components';


export const Wrapper = styled.section`

   display: flex;
   flex-direction: row;
   justify-content:space-between;
   flex-wrap:wrap;
   
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
