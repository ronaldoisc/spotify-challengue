import React, { useEffect } from 'react'
import { useParams, Outlet } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { startLoadingArtistAlbums } from '../../redux/modules/albums';

import { Artist } from '../Artist/Artist';
import { AlbumList } from './AlbumList';
import { Loader } from '../../components/Loader';
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
          <Loader loading={isLoading}/>
          :
          <>
          <Outlet />
            <Navbar title="spotify" />
            <Artist artistId={params.artistId} />
            <h1 className='animate__animated animate__fadeInDown'>Albums</h1>
            <AlbumList list={list} />
          </>
      }

    </>


  )
}
