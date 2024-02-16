import React from 'react';
import { Button, Input, InputBox, Label, PageBox, StyledError, StyledForm, StyledFormik, Title } from './RegisterPage.styled';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/authSlice';

const RegisterLoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length <= 3) {
      errors.name = 'Too short'
    } else if (values.name.length > 20) {
      errors.name = 'Too long'
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length <= 7) {
      errors.password = 'Too short'
    }

    return errors;
  };

  const handleSubmit = (formData, { setSubmitting }) => {
    dispatch(registerUser(formData))
    console.log(formData);
    setSubmitting(false);
  };

  return (
    <PageBox>
      <Title>Fill in Registration Form</Title>
      <StyledFormik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InputBox>
              <Label htmlFor="name">Name</Label>
              <StyledError className={"formError"} name="name" component="div" />
              <Input className={"formInput"} type="text" name="name" />
            </InputBox>
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
              Sign Up
            </Button>
          </StyledForm>
        )}
      </StyledFormik>
    </PageBox>
  );
};

export default RegisterLoginPage;