import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { startLoadingAlbumTracks } from '../../redux/modules/tracks';
import { TableTracks } from './TableTracks';

export const Tracks = () => {
    let params = useParams();
    const dispatch=useDispatch();
    const {tracks } = useSelector((state: RootStateOrAny) => state);
    const {items}=tracks;
    useEffect(() => {
     dispatch(startLoadingAlbumTracks(params.albumId));
    }, [dispatch,params])
    

  return (
    <div>
        <TableTracks tracks={items}/>
    </div>
  )
}
