import { StyledIndexContainer } from '../src/styles/StyledComponents';
import Image from 'next/image';
import rom from '../src/images/rom.jpg';
import vodka from '../src/images/vodka.jpg';
import whisky from '../src/images/whisky.jpg';
import PictureSlider from '../components/PictureSlider';

const Index = () => {
  return (
    <>
      <header>
        <PictureSlider />
      </header>
      <StyledIndexContainer>
        <div>
          <Image
            src={rom.src}
            alt="Picture of the author"
            width={350}
            height={350}
          />
          <article>
            <h2>Rom for the pirat</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              maxime inventore fugit molestiae quas et ratione impedit, nobis
              illum nostrum earum eum nulla consequatur animi perferendis quo
              perspiciatis praesentium ducimus quis officia nemo vitae?
              Asperiores perspiciatis fuga sit eum sunt.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              quos, fugiat corporis nulla nemo ex ducimus alias iste distinctio
              consequuntur. Atque ipsa accusamus delectus at nostrum, eligendi
              consequatur repellendus nobis. Tenetur reprehenderit vel aliquid
              ad.
            </p>
          </article>
        </div>
        <div>
          <article>
            <h2>Vodka for the russian</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              maxime inventore fugit molestiae quas et ratione impedit, nobis
              illum nostrum earum eum nulla consequatur animi perferendis quo
              perspiciatis praesentium ducimus quis officia nemo vitae?
              Asperiores perspiciatis fuga sit eum sunt.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              quos, fugiat corporis nulla nemo ex ducimus alias iste distinctio
              consequuntur. Atque ipsa accusamus delectus at nostrum, eligendi
              consequatur repellendus nobis. Tenetur reprehenderit vel aliquid
              ad.
            </p>
          </article>
          <Image
            src={vodka.src}
            alt="Picture of the author"
            width={350}
            height={350}
          />
        </div>
        <div>
          <Image
            src={whisky.src}
            alt="Picture of the author"
            width={350}
            height={350}
          />
          <article>
            <h2>Whisky for the american</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              maxime inventore fugit molestiae quas et ratione impedit, nobis
              illum nostrum earum eum nulla consequatur animi perferendis quo
              perspiciatis praesentium ducimus quis officia nemo vitae?
              Asperiores perspiciatis fuga sit eum sunt.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              quos, fugiat corporis nulla nemo ex ducimus alias iste distinctio
              consequuntur. Atque ipsa accusamus delectus at nostrum, eligendi
              consequatur repellendus nobis. Tenetur reprehenderit vel aliquid
              ad.
            </p>
          </article>
        </div>
      </StyledIndexContainer>
    </>
  );
};

export default Index;
