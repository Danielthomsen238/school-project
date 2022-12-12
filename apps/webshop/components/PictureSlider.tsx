import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import rom from '../src/images/rom.jpg';
import vodka from '../src/images/vodka.jpg';
import whisky from '../src/images/whisky.jpg';
import { SliderContainer } from '../src/styles/StyledComponents';

interface Picture {
  url: string;
  alt: string;
}

const PictureSlider = () => {
  // Use a tuple to define the state variables
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  //   const [slideClass, setSlideClass] = useState<string>('slide');

  // Define the pictures as an array of Picture objects
  const pictures: Picture[] = [
    { url: whisky.src, alt: 'Picture 3' },
    { url: rom.src, alt: 'Picture 1' },
    { url: vodka.src, alt: 'Picture 2' },
    { url: whisky.src, alt: 'Picture 3' },
    { url: rom.src, alt: 'Picture 1' },
  ];

  const prevPicture = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? pictures.length - 1 : newIndex);
  };

  const nextPicture = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= pictures.length ? 0 : newIndex);
  };

  //   useEffect(() => {
  //     if (currentIndex + 1 >= pictures.length) {
  //       setSlideClass('no_slide');
  //       console.log('stops here');
  //       return;
  //     }
  //   }, [currentIndex]);

  return (
    <div className="picture-slider">
      <button className="prev" onClick={prevPicture}>
        Prev
      </button>
      <SliderContainer pos={-600 * currentIndex + 'px'}>
        <div className="slide">
          {pictures.map((item, idx) => {
            return (
              <Image
                key={idx}
                src={item.url}
                alt={item.alt}
                width={1000}
                height={600}
              />
            );
          })}
        </div>
      </SliderContainer>
      <button className="next" onClick={nextPicture}>
        Next
      </button>
    </div>
  );
};

export default PictureSlider;
