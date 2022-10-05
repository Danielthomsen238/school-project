import Image from 'next/image';
import Image1 from '../src/images/image1.jpg';
import Image2 from '../src/images/image2.jpg';
import SidePanel from '../components/SidePanel';
import {
  StyledHeader,
  StyledMain,
  StyledText,
  StyledSide,
} from '../src/styles/styledcomponents';
import { useEffect, useState } from 'react';

export function Index() {
  return (
    <div>
      <StyledHeader>
        <h1>Frameworks and Coding Blog</h1>
      </StyledHeader>
      <StyledSide>
        <p>Blogs</p>
        <SidePanel />
      </StyledSide>
      <StyledMain>
        <section>
          <StyledText>
            <h2>Coding is for Everyone</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              autem ducimus quidem facere ullam asperiores incidunt adipisci?
              Repudiandae, sapiente amet. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil dicta provident debitis optio
              quisquam, qui, corporis velit similique voluptatum saepe, earum
              adipisci et sit ad officiis deserunt eligendi praesentium quae
              impedit! Error culpa a laudantium nobis eligendi temporibus quod
              architecto.
            </p>
          </StyledText>
          <div>
            <Image src={Image1} alt="coding_image" layout="fixed" />
          </div>
          <div>
            <Image src={Image2} alt="coding_image" layout="fixed" />
          </div>
          <StyledText>
            <h2>Coding is for Everyone</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              autem ducimus quidem facere ullam asperiores incidunt adipisci?
              Repudiandae, sapiente amet. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Nihil dicta provident debitis optio
              quisquam, qui, corporis velit similique voluptatum saepe, earum
              adipisci et sit ad officiis deserunt eligendi praesentium quae
              impedit! Error culpa a laudantium nobis eligendi temporibus quod
              architecto.
            </p>
          </StyledText>
        </section>
      </StyledMain>
    </div>
  );
}

export default Index;
