import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  background-color: #fff;
  width: 90%;
  /* border: solid 2px #555; */
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 6px 12px #d0d0d0, 0 3px 3px rgba(0, 0, 0, 0.35);
`;
export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const CheckLabel = styled(Label)`
  display: flex;
  flex-direction: row;
  gap: 40px;

  > input {
    font-size: 1rem;
    border-color: #4267b3;
  }
`;

export const Span = styled.span`
  margin-bottom: 8px;
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

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 5px;
  border: 2px solid #4267b3;
  border-radius: 10px;

  &:hover,
  &:active,
  &:focus {
    border: 2px solid #4287f5;
  }
`;
