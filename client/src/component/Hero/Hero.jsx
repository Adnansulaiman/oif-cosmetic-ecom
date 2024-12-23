import HeroImage from "../../assets/images/hero-section-2.jpg";
import HeroGif from "../../assets/images/hero-gif.gif";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import Lipstick from "../../assets/images/lipstick-1.jpg";
import ListItem from "../List/ListItem";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { Autoplay, FreeMode} from 'swiper/modules';

const Hero = () => {
  return (
    <div className="flex gap">
      <div
        className="w-1/2 pt-28 pl-12 bg-secondary bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroGif})` }}
      >
        <div className="bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 p-6 mr-5">
          <h1 className="text-6xl text-left font-sans font-bold">
            Unleash Your Inner Beauty{" "}
          </h1>
          <p className="text-lg text-left pt-6 text-slate-800 font-semibold">
            Discover our exclusive range of beauty and skincare products crafted
            for you
          </p>

          <Link className="flex items-center text-center  justify-end pr-1 bg-transparent mt-5 border-2 border-black rounded-full w-52 h-14 hover:scale-105 ">
            <p className="pr-3 text-xl font-semibold">Explore now</p>
            <div className="rounded-full w-12 h-12   border-2 border-black flex items-center justify-center">
              <BsArrowUpRight className="text-2xl text-whit" />
            </div>
          </Link>
        </div>
        <div className="mt-5 pr-5 mb-5">
          <h1 className="text-2xl font-semibold mb-5">Recommended for you</h1>
          <Swiper
        slidesPerView={3.3}
        spaceBetween={0}
        freeMode={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><ListItem /></SwiperSlide>
        <SwiperSlide><ListItem /></SwiperSlide>
        <SwiperSlide><ListItem /></SwiperSlide>
        <SwiperSlide><ListItem /></SwiperSlide>
        <SwiperSlide><ListItem /></SwiperSlide>
        <SwiperSlide><ListItem /></SwiperSlide>
        <SwiperSlide><ListItem /></SwiperSlide>
        
      </Swiper>
        </div>
      </div>
      <div
        className="w-1/2 flex items-end h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="flex justify-end pr-12 mr gap-4 mb-4 w-full ">
          <div
            className="w-64 h-64 rounded-2xl bg-cover flex items-end pb-3 bg-center"
            style={{ backgroundImage: `url(${Lipstick})` }}
          >
            {/* <h1 className="text-2xl ">Matte Luxe Lipstick</h1> */}
            <div className="flex w-full p-3 mx-3 rounded-2xl bg-white  justify-center items-center gap-6">
              <p className="text-black text-lg">shades</p>
              <ul className="flex gap-1">
                <li className="w-5 h-5 rounded-full bg-[#A2001D]"></li>
                <li className="w-5 h-5 rounded-full bg-[#F4C2C2]"></li>
                <li className="w-5 h-5 rounded-full bg-[#FF6F61]"></li>
                <li className="w-5 h-5 rounded-full bg-[#D1B89F]"></li>
              </ul>
            </div>
          </div>
          <div className="realtive bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 w-64 h-64 text-white p-4">
            <h2 className="text-lg pt-8">Glamorous Glow</h2>
            <p className="text-sm pt-4">
              A luxurious matte lipstick with intense color payoff and a
              long-lasting formula that feels weightless on the lips.
            </p>
            <div className="absolute top-0 right-0 m-2  ">
              <BsArrowUpRight className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
