import styled, { keyframes } from 'styled-components';

const goToBot = keyframes`
from {
  height: 50vh;
}
to {
  height: 10vh;
}
`;
const FrontPageAnim = styled.div`
  position: relative;
  z-index: -9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .black_bg {
    z-index: -2;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 50vh;
    background-color: rgba(24, 24, 24, 1);
    animation: ${goToBot} 500ms 1200ms forwards;
  }
`;

export { FrontPageAnim };
