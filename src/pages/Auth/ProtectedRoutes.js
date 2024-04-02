import React, { useEffect, useState } from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'

export default function ProtectedRoutes({ children }) {
  const isAuthenticated = () => {
    const token = localStorage.getItem('accessToken')
    return token !== null ? true : false
  }

  // const [isAuth, setIsAuth] = useState(false)
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const authenticated = await isAuthenticated()
  //     setIsAuth(authenticated)
  //   }

  //   checkAuth()
  // }, [])
  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated() ? (
            children
          ) : (
            <Navigate to="/signin" />
          )
        }
      />
    </Routes>
  );
}
