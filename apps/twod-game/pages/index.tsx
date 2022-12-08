import {
  StyledContainer,
  IdleFigure,
  RunningFigure,
} from '../src/styles/StyledComponents';
import { useEffect, useState } from 'react';
import idle_0 from '../src/images/idle_0.png';

let x = 0;
let y = 0;
let vx = 0;
let vy = 0;
const img = new Image();
img.src = idle_0.src;

const Index = () => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');

    addEventListener('keydown', function (e) {
      if (e.code === 'KeyD') {
        console.log(vx);
        vx = 5;
      }
      if (e.code === 'KeyA') {
        vx = -5;
      }
      if (e.code == 'KeyW') {
        vy = -5;
      }
      if (e.code == 'KeyS') {
        vy = 5;
      }
    });
    addEventListener('keyup', function (e) {
      if (e.code === 'KeyD') {
        vx = 0;
      }
      if (e.code === 'KeyA') {
        vx = 0;
      }
      if (e.code == 'KeyW') {
        vy = 0;
      }
      if (e.code == 'KeyS') {
        vy = 0;
      }
    });

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      x += vx;
      y += vy;
      ctx.drawImage(img, x, y);
      requestAnimationFrame(update);
    };
    update();
  }, []);

  return (
    <StyledContainer>
      <canvas id="canvas" width="1920px" height="1020px"></canvas>
    </StyledContainer>
  );
};

export default Index;
