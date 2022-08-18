import Image from "next/image";
import { useState, useEffect, useRef } from "react";


const PictureSLider = ({slides}) => {
    const slideToBeActiv = [0,1,2];
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
            ) ,
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);
      console.log(index)
      return (
        <>
        <div className="slideshow"
        style={{ top: `${0 + -923 * index}px` }}>
          <div
            className="slideshowSlider">
            {slides.data?.map((item, idx) => (
              <div
                className="image_wrapper"
                key={idx}
              ><Image src={item.Image} alt="banner_image" width={1920} height={923} layout="fixed" />
              <div className={`image_text_container${index === idx ? " active" : ""}`}>
              <p className="image_title">{item.Title}</p>
              <p className="image_content">{item.Content}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
         <div className="slideshowDots">
            {slides.data?.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
          </>
      );
    }
    

 
export default PictureSLider;