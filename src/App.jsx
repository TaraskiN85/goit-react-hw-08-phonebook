// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// import { fetchAllContacts } from "./redux/contacts/contactsSlice";

import ContactsPage from './Pages/ContactsPage/ContactsPage'

import { Container, Phonebook } from "./App.styled";
import { Route, Routes } from "react-router";

import { Layout } from 'components/Layout/Layout';
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from 'Pages/HomePage/HomePage';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectIsLoggedIn } from './redux/auth/authSlice.selectors';

export const App = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])


  return (
    <Phonebook>
      <Layout>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            {isLoggedIn && !isLoading ? <Route path='/contacts' element={<ContactsPage />} /> : <Route path='/contacts' element={<HomePage />} />}
          </Routes>
        </Container>
      </Layout>
    </Phonebook>
  )
}
