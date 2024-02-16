import React, { useEffect } from 'react'
import { Box, StyledLink } from './HomePage.styled'
import { selectIsLoggedIn } from '../../redux/auth/authSlice.selectors';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    if (isLoggedIn) navigate('/contacts')
  }, [isLoggedIn, navigate])
  
  return (
    <Box>
      <h1>Welcome to our App!</h1>
      <p>Keep all your contacts in one place.</p>
      <p>Please <StyledLink to='/register'>register</StyledLink> or <StyledLink to='/login'>login</StyledLink> to use Phonebook.</p>
    </Box>
  )
}

export default HomePage