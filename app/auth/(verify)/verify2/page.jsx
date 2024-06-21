"use client"
import Image from "next/image";
import bg from "@/public/images/auth/bg-2.jpg"
import slider1 from "@/public/images/auth/slide-1.png"
import slider2 from "@/public/images/auth/slide-2.png"
import slider3 from "@/public/images/auth/slide-3.png"
import VerfiyForm from "@/components/auth/verify-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const VerifyPage = () => {
  return (
    <div className="loginwrapper bg-background flex items-center min-h-screen  overflow-hidden w-full">
      <div className="lg-inner-column  grid  xl:grid-cols-2 w-full  justify-center overflow-y-auto p-4">
        <div
          className="h-full w-full  bg-no-repeat bg-center bg-cover hidden xl:block rounded-xl"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full h-full rounded-2xl "
            style={{
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bottom": "40px",
              "--swiper-pagination-bullet-size": "10px",
            }}
          >
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <Image src={slider1} alt="image" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <Image src={slider2} alt="image" className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <Image src={slider3} alt="image" className="" />
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
        <div className=" px-4 flex justify-center items-center">
          <div className="lg:w-[480px]">
            <VerfiyForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;



// "use client"
// import Image from "next/image";
// import background from "@/public/images/auth/sky.png"
// import VerfiyForm from "@/components/auth/verify-form";

// const VerifyPage = () => {

//   return (
//     <div className="loginwrapper bg-background flex items-center min-h-screen  overflow-hidden w-full">
//       <div className="lg-inner-column  flex w-full flex-wrap justify-center overflow-y-auto p-4">
//         <div className="basis-1/2 w-full relative hidden xl:flex justify-center items-center">
//           <Image src={background} alt="image" className="absolute top-0 left-0 w-full h-full" />
//         </div>
//         <div className="basis-1/2 w-full px-4 flex justify-center items-center">
//           <VerfiyForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyPage;
