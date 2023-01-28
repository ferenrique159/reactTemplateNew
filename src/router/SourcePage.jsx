import React from 'react'
import { Outlet } from 'react-router-dom'

export const SourcePage = () => {
  return (
    <>
      <div className="container">
          <Outlet />
      </div>
    </>   
  )
}
