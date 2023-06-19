import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading/Loading";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: testimonials = [], isLoading: isTestimonialsLoading } =
    useQuery({
      queryKey: ["testimonials"],
      queryFn: async () => {
        const result = await axiosSecure.get("/testimonials");
        return result.data;
      },
    });

  if (isTestimonialsLoading) {
    return <Loading></Loading>;
  }

  return (
    
      <div className="lg:px-20 lg:pt-28 pt-5 lg:mb-28 lg:pb-28 dark:text-white  bg-gray-900 dark:bg-gray-950 text-white flex justify-center items-center">
        <Swiper
          //   spaceBetween={30}
          //   centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          //   className="mySwiper"
        >
          {testimonials &&
            testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialSlider
                  testimonial={testimonial}
                ></TestimonialSlider>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

  );
};

export default Testimonials;
