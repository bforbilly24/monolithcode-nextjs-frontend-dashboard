"use client"
import Image from "next/image";
import bg from "@/public/images/auth/bg-2.jpg"
import slider1 from "@/public/images/auth/slide-1.png"
import slider2 from "@/public/images/auth/slide-2.png"
import slider3 from "@/public/images/auth/slide-3.png"
import LockForm from "./lock-form";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const LockPage = () => {
  return (
    <div className="loginwrapper bg-background flex items-center min-h-screen  overflow-hidden w-full">
      <div className="lg-inner-column  grid  lg:grid-cols-2 w-full flex-wrap justify-center overflow-y-auto p-4">
        <div
          className="h-full w-full  bg-no-repeat bg-center bg-cover hidden lg:block rounded-xl"
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
            className="w-full h-full rounded-2xl auth-swiper"
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
          <div className="w-full md:w-[480px] py-5">
            <LockForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockPage;






// "use client"
// import { Card } from "@/components/ui/card";
// import Image from "next/image";
// import background from "@/public/images/auth/sky.png"
// import ForgotForm from "./forgot-form";

// const Forget = () => {

//   return (
//     <Card className="loginwrapper flex items-center min-h-screen h-screen overflow-hidden w-full">
//       <div className="lg-inner-column h-screen flex w-full flex-wrap justify-center overflow-y-auto p-4">
//         <div className="basis-1/2 w-full relative hidden xl:flex justify-center items-center">
//           <Image src={background} alt="image" className="absolute top-0 left-0 w-full h-full" />
//         </div>
//         <div className="basis-full lg:basis-1/2 w-full px-4 flex justify-center items-center">
//           <div className="w-full md:w-[480px]">
//             <ForgotForm />
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default Forget;
