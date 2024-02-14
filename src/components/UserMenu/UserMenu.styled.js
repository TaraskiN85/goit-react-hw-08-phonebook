import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;

  > button {
    cursor: pointer;
    width: 150px;
    height: 2.2rem;
    min-width: 70px;
    font-size: 1.2rem;
    padding: 2px 5px;
    color: #fff;
    border: none;
    border-radius: 10px;
    background-color: #4267b3;
    transition: ease-in 0.2s;

    &:hover,
    &:active {
      background-color: #a52a2a;
    }
  }
`;
