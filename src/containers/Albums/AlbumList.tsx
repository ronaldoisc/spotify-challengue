import React from 'react'
import { Wrapper, Card, CardContent, Image } from './styles';
import { useNavigate } from 'react-router-dom';
export const AlbumList = ({list}) => {


  let navigate = useNavigate();
  const handleClickCard=(albumId)=>{
   
    navigate(`/album/${albumId}/tracks`);
  }
   
  return (
    <Wrapper>
    {
      list.map(item => {
        return <Card key={item.id} onClick={()=>handleClickCard(item.id)}>
           
          <Image src={item.image} alt={item.name}  width={250} height={250}/>

          <CardContent>
            <h1>{item.name}</h1>
            <p>{item.release_date.split("-")[0]}</p>
          </CardContent>
        </Card>
      })
    }
  </Wrapper>
  )
}
