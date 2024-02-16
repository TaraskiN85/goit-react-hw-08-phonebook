import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #616771;
  padding: 30px 0;
  display: block;
  margin: auto;
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 1000px;

  > div {
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PhonebookTitle = styled(NavLink)`
  font-size: 2.8rem;
  align-items: left;
  font-weight: 700;
  color: #e9ebee;
  text-decoration: none;
`;
