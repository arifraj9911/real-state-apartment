import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import roomImg from '../../assets/Images/room-1.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
    <Swiper
    className='rounded-xl my-8 z-0'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {/* <SwiperSlide style={{
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${roomImg})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'130vh',
        backgroundRepeat:'no-repeat'

      }}></SwiperSlide> */}
      <div className="bg-[url('https://i.ibb.co/JCmp3p9/room-1.jpg')]">
      <SwiperSlide></SwiperSlide>
      </div>
      <div>
      <SwiperSlide><img src={roomImg} alt="" /></SwiperSlide>
      </div>
      <div>
      <SwiperSlide><img src={roomImg} alt="" /></SwiperSlide>
      </div>
      {/* <SwiperSlide><img src={roomImg} alt="" /></SwiperSlide>
      <SwiperSlide><img src={roomImg} alt="" /></SwiperSlide> */}
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
  );
};

export default Banner;
