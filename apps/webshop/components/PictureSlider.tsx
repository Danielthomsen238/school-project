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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const SliderRef = useRef<HTMLDivElement>(null);

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
    setCurrentIndex(newIndex >= pictures.length - 1 ? 0 : newIndex);
    if (SliderRef.current) {
      console.log('hello motha fucka', newIndex);
      if (newIndex >= pictures.length - 1) {
        SliderRef.current.style.transition = '0ms';
        SliderRef.current.style.top = `${-600 * currentIndex}px`;
        setTimeout(() => {
          SliderRef.current.style.transition = '500ms';
        }, 150);
        return;
      } else {
        setCurrentIndex(newIndex);
        SliderRef.current.style.top = `${-600 * currentIndex}px`;
      }
    }
  };

  //   const slider = () => {};
  return (
    <div className="picture-slider">
      <button className="prev" onClick={prevPicture}>
        Prev
      </button>
      <SliderContainer>
        <div ref={SliderRef} className="slide">
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
