import React from 'react';
import { loginUser } from '../../redux/auth/authSlice';
import { Button, Input, InputBox, Label, PageBox, StyledError, StyledForm, StyledFormik, Title } from './LoginPage.styled';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  const handleSubmit = formData => dispatch(loginUser(formData))

  return (
    <PageBox>
    <Title>Fill in Login Form</Title>
    <StyledFormik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <InputBox>
            <Label htmlFor="email">Email</Label>
              <StyledError name="email" component="div" />
              <Input type="email" name="email" />
          </InputBox>
          <InputBox>
            <Label htmlFor="password">Password</Label>
            <StyledError name="password" component="div" />
            <Input type="password" name="password" />
          </InputBox>
          <Button type="submit" disabled={isSubmitting}>
            Sign In
          </Button>
        </StyledForm>
      )}
    </StyledFormik>
  </PageBox>
  );
};

export default LoginPage;