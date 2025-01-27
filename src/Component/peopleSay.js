import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import '../Component/peopleSay.css'
import arrow from '../image/arrow.png'
import star from '../image/Star.png'
import deva from '../image/diva.png'
const CustomCarousel = () => {
  return (
    <>
    <div className="container">
    <div><p className="mainHead">What peoples says about us </p></div>
    <div className="carousel-container" style={{ padding: "20px" }}>
      <Swiper
        modules={[Navigation]} // Include Navigation
        navigation
        spaceBetween={16} // Spacing between slides
        slidesPerView={2.5} // Show 2 full slides and half of the 3rd slide
        breakpoints={{
          0: {
            slidesPerView: 1.2, // Show 1 full slide and part of the 2nd on mobile
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.2, // Show 2 full slides and part of the 3rd on medium screens
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2.5, // Show 2 full slides and part of the 3rd on large screens
            spaceBetween: 16,
          },
        }}
      >
        {/* Cards (slides) */}
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: "rgba(255, 255, 255, 1)",
                padding: "20px",
                borderRadius: "10px",
              
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="cardV">
                <img src={arrow} alt="wew"/>
                <img src={star} alt=""/>
              </div>
              
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/> laboris nisi ut aliquip ex ea commodo consequat aute irure sint <br/> amet occaecat cupidatat non proident ea commodo consequat <br/> aute irure sint amet occaecat cupidatat non proident </p>
          
          <div className="cardFooter">

          <div> <img src={deva} alt="www"/></div> 
          <div> <p>Chris<br/>President and CEO, PrintReach, USA</p></div> 
          </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </>
  );
};

export default CustomCarousel;
