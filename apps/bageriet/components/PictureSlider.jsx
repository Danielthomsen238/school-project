import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import slide1 from '../src/images/slide1.jpg';
import slide2 from '../src/images/slide2.jpg';
import slide3 from '../src/images/slide3.jpg';

const PictureSLider = () => {
  const slideArray = [slide1.src, slide2.src, slide3.src];
  const slideToBeActiv = [0, 1, 2];
  const delay = 8000;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideToBeActiv.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  console.log(index);
  return (
    <>
      <div className="slideshow" style={{ left: `-${0 + 100 * index}vw` }}>
        <div className="slideshowSlider">
          {slideArray.map((item, idx) => (
            <div className="image_wrapper" key={idx}>
              <Image
                src={item}
                alt="banner_image"
                width={1920}
                height={900}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="slideshowDots">
        {slideArray.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default PictureSLider;
