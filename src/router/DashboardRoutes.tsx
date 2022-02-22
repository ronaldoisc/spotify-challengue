import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Albums } from '../containers/Albums/Albums'

export const DashboardRoutes = () => {
  return (
    <>
    <Routes>
      <Route path=":artistId" element={<Albums/>}/>
      
  </Routes>

    </>
  )
}
