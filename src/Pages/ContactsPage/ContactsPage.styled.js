import styled from 'styled-components';

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

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  padding-bottom: 12px;
`;
