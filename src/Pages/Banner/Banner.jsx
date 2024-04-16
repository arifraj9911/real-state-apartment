import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import roomImg from "../../assets/Images/room-1.jpg";
import slider1 from '../../assets/Images/slider1.jpg'
import slider2 from '../../assets/Images/slider2.jpg'
import slider3 from '../../assets/Images/slider3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import './Banner.css'

const Banner = () => {
  return (
    <Swiper
      className=" z-0"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={() =>{

      } }
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div
          className="hero min-h-96 lg:min-h-screen"
          style={{
            backgroundImage: `url(${slider1})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-4/5 flex justify-start  text-left text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Luxurious Palace</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="bg-[#0075FF] hover:bg-[#2264b0] text-[16px] font-bold text-white py-3 px-6 rounded-md ">
                Know More
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero min-h-96 lg:min-h-screen"
          style={{
            backgroundImage: `url(${slider2})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-4/5 flex justify-start  text-left text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero  min-h-96 lg:min-h-screen"
          style={{
            backgroundImage: `url(${slider3})`,
          }}
        
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-4/5 flex justify-start  text-left text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Luxurious Palace </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
