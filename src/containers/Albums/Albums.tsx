import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { startLoadingArtistAlbums } from '../../redux/modules/albums';

import { Artist } from '../Artist/Artist';
import { AlbumList } from './AlbumList';
import { Navbar } from '../../components/Navbar';

export const Albums = () => {
  let params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingArtistAlbums(params.artistId))

  }, [dispatch, params])

  const { ui, albums } = useSelector((state: RootStateOrAny) => state);
  const { list } = albums;
  const { isLoading } = ui;

  return (
    <>
      {
        isLoading ?
          <h1>Cargando...</h1>
          :
          <>
            <Navbar/>
            <Artist artistId={params.artistId} />
            <h1>Albums</h1>
            <AlbumList list={list} />
          </>
      }

    </>


  )
}
