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
import { useDispatch } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])


  return (
    <Phonebook>
      <Layout>
        <Container>
          <Routes>
            <Route path='/' element={<RestrictedRoute><HomePage /></RestrictedRoute>} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
          </Routes>
        </Container>
      </Layout>
    </Phonebook>
  )
}
