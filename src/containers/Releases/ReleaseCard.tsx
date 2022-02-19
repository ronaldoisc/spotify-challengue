import { Card, Image, CardFooter } from './styles';
import { useNavigate } from 'react-router-dom';


export const ReleaseCard = ({ release }) => {

    let navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/albums/${id}`);
    }

    return (
        <Card key={release.id} onClick={() => handleClick(release.artists[0].id)}>
            <Image src={release.image} alt={release.name}  width={200} height={200} />
            <h3>{release.name}</h3>
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
