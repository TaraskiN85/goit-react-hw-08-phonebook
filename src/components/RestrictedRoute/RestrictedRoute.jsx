import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/authSlice.selectors'
import { Navigate } from 'react-router'

const RestrictedRoute = ({ children}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return isLoggedIn ? <Navigate to='/contacts' replace /> : children;
}

export default RestrictedRoute