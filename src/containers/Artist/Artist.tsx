import React, { useEffect } from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { startLoadingArtistById } from '../../redux/modules/artist';
import {Container,ArtistCard,ArtistDetails} from './styles';

export const Artist = ({ artistId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingArtistById(artistId));
    }, [dispatch, artistId])

    const { activeArtist } = useSelector((state: RootStateOrAny) => state.artist);

    return (
        <>
            {
                activeArtist &&
                <Container>
                    <img src={activeArtist.image} width={250} height={250} alt="artist" />
                    <ArtistCard>
                        <h1>{activeArtist.name}</h1>
                        <ArtistDetails>    
                                <p>followers: {activeArtist.followers} <i className="material-icons md-light">groups </i>   </p>    
                                <p>popularity: {activeArtist.popularity} <i className="material-icons md-light"> star_rate </i> </p>    
                        </ArtistDetails>
                    </ArtistCard>
                </Container>
            }
        </>

    )
}
