import { StyledPage } from '../src/styles/StyledComponents';

interface Paths {
  [index: number]: { x: number; y: number };
}

const Index = () => {
  const Coords: Paths = [];
  let x = 0;
  let y = 200;
  for (let i = 0; i < 200; i++) {
    x++;
    y--;
    if (Coords instanceof Array) {
      Coords.push({ x, y });
    }
  }
  return (
    <StyledPage>
      <div>
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <path id="path" d="M 1 200 C 1 200, 1 -50, 200 1" />
        </svg>
      </div>
    </StyledPage>
  );
};

export default Index;
