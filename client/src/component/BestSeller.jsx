import ProductCard from "./ProductCard"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
// import required modules
import { Scrollbar} from 'swiper/modules';

const BestSeller = () => {
  return (
    <div className="px-12 pt-8">
        <h1 className="text-3xl font-semibold">Bestsellers</h1>
        <Swiper
        slidesPerView={5.1}
        spaceBetween={0}
        // freeMode={true}
        
        scrollbar={{
            hide: true,
          }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        <SwiperSlide><ProductCard /></SwiperSlide>
        
        
      </Swiper>
        
    </div>
  )
}

export default BestSeller