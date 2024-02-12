import styled from 'styled-components';

export const Phonebook = styled.div`
  margin: auto;
  height: 100vh;
  color: #4c4c4c;
`;

export const Header = styled.header`
  background-color: #616771;
  padding: 30px 0;
  display: block;
  margin: auto;
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 1000px;
`;
export const Main = styled.main`
  display: flex;
  padding: 30px 15px;
  justify-content: center;
  align-items: start;
  gap: 60px;
  height: 100%;

  > section {
    width: calc((100% - 100px) / 2);
    width: 100%;
    flex-basis: 1;
  }
`;

export const PhonebookTitle = styled.h1`
  font-size: 2.8rem;
  align-items: left;
  font-weight: 700;
  color: #e9ebee;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  padding-bottom: 12px;
`;
