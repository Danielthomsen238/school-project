import {
  StyledMain,
  StyledSide,
  StyledAbout,
} from '../src/styles/styledcomponents';
import SidePanel from '../components/SidePanel';

const About = () => {
  return (
    <>
      <StyledSide>
        <p>Blogs</p>
        <SidePanel />
      </StyledSide>
      <StyledMain>
        <StyledAbout>
          <h1>About this website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            mollitia ullam iure praesentium id nemo, distinctio necessitatibus
            iste dolores! Quo culpa voluptate eum odit est alias ipsam itaque.
            Consectetur, asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            itaque, voluptate labore dolorem cumque porro ratione illo sed vero
            cum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            tenetur officia optio consectetur, omnis rerum perferendis ipsam vel
            saepe at blanditiis, numquam beatae quasi nisi? Quos cupiditate odio
            nobis praesentium repellendus fuga odit ullam in quaerat! Deserunt
            asperiores perferendis laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            mollitia ullam iure praesentium id nemo, distinctio necessitatibus
            iste dolores! Quo culpa voluptate eum odit est alias ipsam itaque.
            Consectetur, asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            itaque, voluptate labore dolorem cumque porro ratione illo sed vero
            cum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            tenetur officia optio consectetur, omnis rerum perferendis ipsam vel
            saepe at blanditiis, numquam beatae quasi nisi? Quos cupiditate odio
            nobis praesentium repellendus fuga odit ullam in quaerat! Deserunt
            asperiores perferendis laborum.
          </p>
        </StyledAbout>
      </StyledMain>
    </>
  );
};

export default About;
