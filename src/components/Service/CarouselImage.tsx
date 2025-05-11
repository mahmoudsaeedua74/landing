"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import firstImage from "../../../public/assets/الاستراد.png";
import secondImage from "../../../public/assets/التخزين.png";
import thirdImage from "../../../public/assets/اللوجيستيات.png";
import fourthImage from "../../../public/assets/تحويل الاموال.png";
import fiveImage from "../../../public/assets/خدمة العملاء.png";
import sixImage from "../../../public/assets/منتجاتنا.png";
import Image from "next/image";
import { Button } from "../ui/Button/Button";
import { motion } from "framer-motion";

const getService = [
  {
    id: 1,
    image: sixImage,
    title: "منتجاتنا",
    description: "منتجات مختارة مصممة لتناسب احتياجاتك وتقدم لك أفضل جودة",
  },
  {
    id: 2,
    image: secondImage,
    title: "التخزين",
    description:
      "نوفر أنظمة تخزين آمنة ومنظمة تضمن الحفاظ على جودة المنتجات وسهولة الوصول إليها",
  },
  {
    id: 3,
    image: thirdImage,
    title: "اللوجيستيات",
    description:
      "نقــــدم حلول لوجستية سريعة وموثوقة لضمن وصول منتجاتك في الوقت المناسب",
  },
  {
    id: 4,
    image: firstImage,
    title: "خدمة العملاء",
    description: "حلول متكاملة لتعزيز ثقة عملائك وتقديم تجربة استثنائية",
  },
  {
    id: 5,
    image: fiveImage,
    title: "خدمة العملاء",
    description: "حلول متكاملة لتعزيز ثقة عملائك وتقديم تجربة استثنائية",
  },
  {
    id: 6,
    image: fourthImage,
    title: "تحويل الأموال",
    description: "خدمات مالية آمنة وسريعة لتسهيل معاملاتك التجارية",
  },
];

// Container animation
const containerAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { amount: 0.1, once: false },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Staggered card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function CarouselImage() {
  return (
    <motion.div
      className="bg-gray-100 py-10 overflow-hidden"
      {...containerAnimation}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1124: {
            slidesPerView: 4,
          },
        }}
        className="service-swiper"
      >
        {getService.map((item, index) => (
          <SwiperSlide key={item.id}>
            <motion.div
              className="relative group h-[600px] rounded-3xl shadow-xl overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              custom={index}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  index % 2 === 0 ? "bg-main-color" : "bg-second-color"
                } opacity-50`}
              ></div>

              <div
                className={`absolute inset-x-0 top-0 bottom-full group-hover:bottom-0 ${
                  index % 2 === 0 ? "bg-main-color" : "bg-second-color"
                } opacity-100 transition-all duration-500 ease-in-out`}
              ></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white z-10">
                <h3 className="text-3xl md:text-[46px] font-bold text-center mb-4">
                  {item.title}
                </h3>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center">
                  <p className="text-base md:text-[22px] text-center mb-6 max-w-[250px]">
                    {item.description}
                  </p>
                  <Button
                    variant="textMain"
                    size="sm"
                    className={`${
                      index % 2 === 0
                        ? "bg-second-color hover:bg-second-color/90"
                        : "bg-main-color hover:bg-main-color/90"
                    } text-white`}
                  >
                    ابدأ الآن
                  </Button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
