import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { startLoadingAlbumTracks } from '../../redux/modules/tracks';
import { TableTracks } from './TableTracks';
import styled from 'styled-components';
import { Navbar } from '../../components/Navbar';
import { Loader } from '../../components/Loader';
import { Artist } from '../Artist/Artist';
const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
overflow: auto;
`;

export const Tracks = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const { ui, tracks } = useSelector((state: RootStateOrAny) => state);
  const { items } = tracks;
  const { isLoading } = ui;

  useEffect(() => {
    dispatch(startLoadingAlbumTracks(params.albumId));
  }, [dispatch, params])



  return (
    <>
      {
        isLoading === true ?
          <Loader loading={isLoading} />
          :
          (
            items[0] &&
            <>
              <Navbar title="spotify" />
              <Artist artistId={items[0].artist.id} />
              <Wrapper>
                <h1 className='animate__animated animate__fadeInLeft'>Tracks</h1>
                <TableTracks tracks={items} />
              </Wrapper>
            </>

          )

      }

    </>


  )
}
