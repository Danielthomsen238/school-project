import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const ImageSlider = ({slides}) => {
    let i = 1;
    let bool = false;
     
    const changeSlide = (event) => {
     const slider = document.getElementsByClassName('slider')
     const header_text = document.getElementsByClassName('header_text')
     const btns = document.getElementsByClassName('slide_btn')
        if(event?.target.className === "slide_btn1 slide_btn")
        {i = 1}
        if(event?.target.className === "slide_btn2 slide_btn")
        {i = 2}
        if(event?.target.className === "slide_btn3 slide_btn")
        {i = 3}
        for (let index = 0; index < header_text.length; index++) {
         header_text[index].style.opacity = 0;
         header_text[index].style.top = "70%";
         btns[index].style.backgroundColor = "rgba(128, 128, 128, 0.427)"
        }
        switch(i) {
         case 1:
           slider[0].style.top = "0px";
           btns[0].style.backgroundColor = "#01b3a758"
           header_text[0].style.opacity = 1;
           header_text[0].style.top = "50%";
           break;
         case 2:
           slider[0].style.top = "-923px";
           header_text[1].style.opacity = 1;
           header_text[1].style.top = "50%";
           btns[1].style.backgroundColor = "#01b3a758"
           break;
         case 3:
           slider[0].style.top = "-1843px";
           header_text[2].style.opacity = 1;
           header_text[2].style.top = "50%";
           btns[2].style.backgroundColor = "#01b3a758"
         break;
         default:
       }
       
       switch(bool){
         case false:
           if(i == 3){
             i--
             bool = true
           }else {
             i++
           }
           break;
           case true:
             if(i == 1){
               i++
               bool = false
             }else {
               i--
             }
             break;
       }
     }
 
 
  return (
  <>
    <div className='slider'>
    {slides.data?.map(item => {
      return (
        <div className={`image_wrapper${item.id}`} key={item.id}>
        <Image src={item.Image} alt="banner_image" width={1920} height={933} />
        <div className='header_text'>
          <p className='header_title'>{item.Title}</p>
          <p className='header_content'>{item.Content}</p>
        </div>
        </div>
      )
    })}
    
    </div>
    
    <div className='slide_btns'>
      <div onClick={changeSlide} className='slide_btn1 slide_btn'></div>
      <div onClick={changeSlide} className='slide_btn2 slide_btn'></div>
      <div onClick={changeSlide} className='slide_btn3 slide_btn'></div>
      </div>
      </>
  );
};

export default ImageSlider;