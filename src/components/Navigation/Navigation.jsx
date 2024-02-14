import React from 'react'
import { Box, StyledLink } from './Navigation.styled'

export const Navigation = () => {
  return (
    <Box>
      <StyledLink to='/register'>Register</StyledLink>
      <StyledLink to='/login'>Login</StyledLink>
    </Box>
  )
}
