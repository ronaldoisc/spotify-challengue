import { Wrapper, CardContent, Image } from './styles';
import { Outlet, useNavigate } from 'react-router-dom';
import { Card } from '../../globals/stylesGlobals';
export const AlbumList = ({list}) => {
  
  let navigate = useNavigate();
  //  Function to navigate at track page
  const handleClickCard=(albumId)=>navigate(`/albums/${albumId}/tracks`)
   
  return (
    <Wrapper>
      <Outlet/>
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
