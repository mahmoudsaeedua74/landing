"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import secondImage from "../../../public/assets/التخزين.png";
import thirdImage from "../../../public/assets/اللوجيستيات.png";
import fourthImage from "../../../public/assets/تحويل الاموال.png";
import fiveImage from "../../../public/assets/خدمة العملاء.png";
import sixImage from "../../../public/assets/منتجاتنا.png";
import Image from "next/image";
import { Button } from "../ui/Button/Button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const getService = [
  {
    id: 1,
    image: sixImage,
    title: "OurProduct",
    description: "OurProductDescription",
  },
  {
    id: 2,
    image: secondImage,
    title: "Storage",
    description: "StorageDescription",
  },
  {
    id: 3,
    image: thirdImage,
    title: "Logistics",
    description: "LogisticsDescription",
  },
  {
    id: 5,
    image: fiveImage,
    title: "CustomerService",
    description: "CustomerServiceDescription",
  },
  {
    id: 6,
    image: fourthImage,
    title: "MoneyTransfer",
    description: "MoneyTransferDescription",
  },
];

const containerAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { amount: 0.1, once: false },
  transition: { duration: 0.5, ease: "easeOut" },
};

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
  const t = useTranslations("OurService");
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
                  {t(item.title)}
                </h3>

                <div className=" flex flex-col items-center">
                  <p className="text-base md:text-[22px] leading-normal text-center mb-6 max-w-[250px]">
                    {t(item.description)}
                  </p>
                  <Button
                    variant="textMain"
                    size="sm"
                    className={`${
                      index % 2 === 0
                        ? "bg-second-color hover:bg-second-color/90"
                        : "bg-main-color hover:bg-main-color/90"
                    } text-white mt-20 `}
                  >
                    {t("button")}
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
