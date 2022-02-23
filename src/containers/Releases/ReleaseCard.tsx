import {Image, CardFooter } from './styles';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../globals/stylesGlobals';


export const ReleaseCard = ({ release }) => {

    let navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/albums/${id}`);
        // navigate(`/test`);
    }

    return (
        <Card key={release.id} onClick={() => handleClick(release.artists[0].id)}>
            <Image src={release.image} alt={release.name}  width={200} height={200} />
            <h1>{release.name}</h1>
            <CardFooter>
                {
                    release.artists.map((artist: any) => {
                        return <span key={artist.id}>{artist.name}</span>
                    })
                }
            </CardFooter>

        </Card>
    )
}
