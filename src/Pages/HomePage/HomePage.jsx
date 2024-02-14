import React from 'react'
import { Box, StyledLink } from './HomePage.styled'

const HomePage = () => {
  return (
    <Box>
      <h1>Welcome to our App!</h1>
      <p>Keep all your contacts in one place.</p>
      <p>Please <StyledLink to='/register'>register</StyledLink> or <StyledLink to='/register'>login</StyledLink> to use Phonebook.</p>
    </Box>
  )
}

export default HomePage