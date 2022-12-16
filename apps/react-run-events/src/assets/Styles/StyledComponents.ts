import styled, { keyframes } from 'styled-components';

const goToBot = keyframes`
from {
  height: 50vh;
}
to {
  height: 0vh;
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
const StyledP = styled.p`
  border-bottom: solid 1px grey;
  width: 80vw;
  margin-bottom: 20px;
`;
const StyledHome = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  width: 100vw;
  overflow: hidden;
`;
const StyledDistance = styled.div`
  display: flex;
  width: 80vw;
  justify-content: space-between;
  margin-bottom: 20px;
  div {
    background-color: #dd173d;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    width: 50px;
    height: 50px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
  }
`;
const StyledEvent = styled.div`
  display: flex;
  width: 80vw;
  .type {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dd173d;
  }
`;
export { FrontPageAnim, StyledHome, StyledP, StyledDistance, StyledEvent };
