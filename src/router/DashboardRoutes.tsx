import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Albums } from '../containers/Albums/Albums'
import { Tracks } from '../containers/Tracks/Tracks'
import { Home } from '../containers/Home/Home';
import { TrackDetails } from '../containers/Tracks/TrackDetails';

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/albums/:artistId" element={<Albums />} />
          <Route path="/album/:albumId/tracks" element={<Tracks />} />
          <Route path="/track/:trackId" element={<TrackDetails />} />
          <Route path="/*" element={<Navigate to={"/"} replace />} />
      </Routes>

    </>
  )
}
