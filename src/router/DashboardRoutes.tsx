import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Albums } from '../containers/Albums/Albums'
import { Tracks } from '../containers/Tracks/Tracks'

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path=":artistId" element={<Albums />} />
        <Route path=":albumId/tracks" element={<Tracks />} />
      </Routes>

    </>
  )
}
