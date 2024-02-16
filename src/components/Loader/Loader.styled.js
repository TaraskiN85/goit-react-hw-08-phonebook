import styled from 'styled-components';

export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: auto;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .path {
    stroke: #4267b3;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const SmallStyledSpinner = styled(StyledSpinner)`
  width: 45px;
  height: 45px;
  margin-right: 130px;

  & .path {
    stroke: #a52a2a;
  }
`;
