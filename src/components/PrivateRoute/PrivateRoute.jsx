import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/authSlice.selectors'
import { Navigate } from 'react-router'

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return isLoggedIn ? children : <Navigate to={redirectTo} replace />
}

export default PrivateRoute