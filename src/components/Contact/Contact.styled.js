import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;
  align-items: center;
  background-color: #fff;
  padding: 15px 20px;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.2;

  border-radius: 20px;
  color: #154c79;
  box-shadow: 0 6px 12px #d0d0d0, 0 3px 3px rgba(0, 0, 0, 0.35);
  transition: ease-in 0.2s;

  /* for modal opening in future */
  /* &:hover {
    cursor: pointer;
    box-shadow: 0 6px 12px #a7a7a7, 0 3px 3px rgba(0, 0, 0, 0.45);
    color: #4287f5;
  } */

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  > button {
    height: 70%;
    padding: 2px 5px;
    border: solid 2px #555;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    background-color: #616771;
    color: #fff;

    &:hover {
      background-color: #a52a2a;
    }
  }
`;
