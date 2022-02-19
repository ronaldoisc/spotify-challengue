import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import { Navbar } from '../../components/Navbar';
import { startLoadingNewReleases } from '../../redux/modules/newReleases';
import { Releases } from '../Releases/Releases';
import { getCurrentTime } from '../../helper/getCurrentTime';


const Time = styled.h1`
margin:0.7rem;
color:white;
`;

export const Home = () => {
  const time = getCurrentTime();
  const dispatch = useDispatch();

  const { ui, newReleases } = useSelector((state: RootStateOrAny) => state);
  const { releases } = newReleases;
  const { isLoading } = ui;
  
  useEffect(() => {
    dispatch(startLoadingNewReleases());
  }, [dispatch])

 
  return (
    <>
      {
        isLoading ?
          <h1>Cargando....</h1>
          :
          <div>
            <Navbar />
            <Time>{time}!</Time>
            <Releases releases={releases} />
          </div>
      }
    </>
  )
}
