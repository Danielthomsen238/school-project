import idle_0 from '../images/idle_0.png';
import idle_1 from '../images/idle_1.png';
import idle_2 from '../images/idle_2.png';
import idle_3 from '../images/idle_3.png';
import run_0 from '../images/run_0.png';
import run_1 from '../images/run_1.png';
import run_2 from '../images/run_2.png';
import run_3 from '../images/run_3.png';
import styled, { keyframes } from 'styled-components';

interface Position {
  x: number;
}

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: black;
  overflow: hidden;
`;

const Idle = keyframes`
0% {
    background-image: url(${idle_0.src});
}
25% {
    background-image: url(${idle_1.src});
}
50% {
    background-image: url(${idle_2.src});
}
75% {
    background-image: url(${idle_3.src});
}
`;

const Running = keyframes`
0% {
    background-image: url(${run_0.src});
}
25% {
    background-image: url(${run_1.src});
}
50% {
    background-image: url(${run_2.src});
}
75% {
    background-image: url(${run_3.src});
}
`;

const IdleFigure = styled.div<Position>`
  width: 25px;
  height: 35px;
  position: absolute;
  transition: 2s ease-in-out;
  left: ${(props) => props.x};
  background-image: url(${idle_0.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${Idle} 0.6s infinite;
`;

const RunningFigure = styled.canvas`
  background-image: url(${run_0.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: ${Running} 0.6s infinite;
`;

const Matrix = styled.div<Position>`
  position: absolute;
  top: 0;
  color: #a4f644;
  animation: MatrixAnim 3s infinite;

  @keyframes MatrixAnim {
    from {
      top: 0;
      left: ${(props) => props.x + 'px'};
    }
    to {
      top: 1080px;
      left: ${(props) => props.x + 'px'};
    }
  }
`;

export { StyledContainer, IdleFigure, RunningFigure, Matrix };
