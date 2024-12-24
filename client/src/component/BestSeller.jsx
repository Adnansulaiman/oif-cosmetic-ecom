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
    <div className=" px-4 md:px-12 pt-8">
        <h1 className="text-3xl font-semibold">Bestsellers</h1>
        <div className="hidden md:flex">
        <Swiper
        slidesPerView={4.5}
        spaceBetween={0}
        // freeMode={true}
        
        scrollbar={{
            hide: true,
          }}
        modules={[Scrollbar]}
        className="mySwiper "
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
        <div className="flex justify-center sm:hidden">
        <Swiper
        slidesPerView={1.7}
        spaceBetween={0}
        // freeMode={true}
        
        scrollbar={{
            hide: true,
          }}
        modules={[Scrollbar]}
        className="mySwiper  "
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
        <div className="flex  justify-center max-sm:hidden md:hidden">
        <Swiper
        slidesPerView={3}
        spaceBetween={0}
        // freeMode={true}
        
        scrollbar={{
            hide: true,
          }}
        modules={[Scrollbar]}
        className="mySwiper  "
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
        
        
    </div>
  )
}

export default BestSeller