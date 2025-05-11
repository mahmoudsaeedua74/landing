"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { useLocale, useTranslations } from "next-intl";

interface WhyChooseUsItemProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string[];
  isReversed?: boolean;
  index: number;
}
const MoveImage = motion(Image);
export default function WhyChooseUsItem({
  image,
  title,
  subtitle,
  description,
  index,
}: WhyChooseUsItemProps) {
  const t = useTranslations("ChoseUs");
  const locale = useLocale();
  return (
    <div
      className={`flex flex-col xl:flex-row overflow-hidden  gap-8  items-center justify-center`}
    >
      <MoveImage
        initial={{
          opacity: 0,
          x:
            locale === "ar"
              ? index % 2 === 0
                ? -200
                : 200
              : index % 2 === 0
              ? 200
              : -200,
        }}
        className={`relative rounded-lg  ${
          index % 2 === 0 ? "order-2" : "order-1"
        }`}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src={image}
        alt={title}
        width={700}
        height={200}
        priority={index === 0}
      />

      <motion.div
        className={`text-main-color ms-4 ${
          index % 2 === 0 ? "xl:order-1" : "xl:order-2"
        }`}
        initial={{
          opacity: 0,
          x:
            locale === "ar"
              ? index % 2 === 0
                ? 200
                : -200
              : index % 2 === 0
              ? -200
              : 200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div>
          <h3 className="font-semibold mb-2 text-[2.1250rem]   lg:text-[3.1250rem]">
            {index + 1}. {title}
          </h3>
          <h4 className=" lg:text-[3.75rem]  text-[2.1250rem]  font-bold mb-4 w-full">
            {subtitle}
          </h4>

          <div className="space-y-3">
            {description.map((item, i) => (
              <p key={i} className="text-[1.3rem]  lg:text-[2.0625rem]">
                {t(item)}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
// text-center text-[1.5625rem]  sm:text-[2.5625rem] md:text-[3.5625rem] lg:text-[4.5625rem] text-main-color
