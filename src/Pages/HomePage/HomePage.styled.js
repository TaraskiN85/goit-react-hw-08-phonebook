import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 3rem;
    font-weight: 600;
    padding-bottom: 36px;
  }

  > p {
    color: #616771;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #4267b3;
  transition: ease-in 0.2s;

  &:hover {
    color: #4287f5;
  }
`;
