import React from 'react'
import { Box } from './UserMenu.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/authSlice.selectors'
import { logoutUser } from '../../redux/auth/authSlice'

export const UserMenu = () => {
  const userEmail = useSelector(selectUser).email
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logoutUser())

  return (
    <Box>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </Box>
  )
}
