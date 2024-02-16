import React from 'react'
import { Container, Header, PhonebookTitle } from './Layout.styled'
import { Navigation } from 'components/Navigation/Navigation'
import { UserMenu } from 'components/UserMenu/UserMenu'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/authSlice.selectors'

export const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        <Container>
            <div>
              <PhonebookTitle to='/'>Phonebook</PhonebookTitle>
              {isLoggedIn ? <UserMenu /> : <Navigation />}
            </div>
        </Container>
      </Header>
      {children}
    </>
  )
}
