import React from "react";
import forth from "../../../public/assets/4. ما يميزنا/صورة 3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dynamic from "next/dynamic";
import { TestimonialCard } from "./TestimonialCard";
const Heading = dynamic(() => import("../common/Heading"));
const testimonials = [
  {
    id: 1,
    name: "Samy Ahmed",
    title: "Graphic Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and type-setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    avatar: forth,
  },
  {
    id: 2,
    name: "Samy Ahmed",
    title: "Graphic Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and type-setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    avatar: forth,
  },
  {
    id: 3,
    name: "Samy Ahmed",
    title: "Graphic Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and type-setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    avatar: forth,
  },
  {
    id: 4,
    name: "Samy Ahmed",
    title: "Graphic Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and type-setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    avatar: forth,
  },
  {
    id: 5,
    name: "Samy Ahmed",
    title: "Graphic Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and type-setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    avatar: forth,
  },
];

export default function Testimonial() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <Heading title="Testimonial" icon="fa" />
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1124: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard item={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
