import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 40px;
  font-size: 1.4rem;
  font-weight: 400;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #e9ebee;
  width: 120px;
  text-align: center;

  &:hover,
  &:focus,
  &.active {
    font-weight: 500;
    color: #4287f5;
  }
`;
