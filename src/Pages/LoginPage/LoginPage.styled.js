import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const PageBox = styled.div`
  height: 60vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  padding-bottom: 36px;
`;

export const StyledFormik = styled(Formik)`
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  background-color: #fff;
  width: 50%;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 6px 12px #d0d0d0, 0 3px 3px rgba(0, 0, 0, 0.35);
`;
export const InputBox = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
`;

export const Input = styled(Field)`
  margin-top: 12px;
  font-size: 1.2rem;
  border-color: #4267b3;
  border-radius: 3px;

  &.active {
    border-color: #4267b3;
  }
`;

export const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 8px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 1rem;
  position: absolute;
  top: 33%;

  & + input {
    border: 2px solid red;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 40%;
  min-width: 150px;
  font-size: 1.2rem;
  padding: 5px;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #4267b3;
  transition: ease-in 0.2s;

  &:hover,
  &:active {
    background-color: #4287f5;
  }
`;
