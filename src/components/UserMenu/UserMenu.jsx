import React from 'react'
import { Box } from './UserMenu.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectUser } from '../../redux/auth/authSlice.selectors'
import { logoutUser } from '../../redux/auth/authSlice'
import { SmallLoader } from 'components/Loader/Loader'

export const UserMenu = () => {
  const userData = useSelector(selectUser)
  const isLoading = useSelector(selectIsLoading)
  const userEmail = userData?.email ?? 'Email not found'
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logoutUser())

  return (
    <Box>
      {isLoading ? <SmallLoader /> : <><p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button></>}
      
    </Box>
  )
}
