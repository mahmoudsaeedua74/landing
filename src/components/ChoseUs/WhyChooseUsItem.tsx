"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

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
  return (
    <div
      className={`flex  overflow-hidden f gap-8  items-center justify-center`}
    >
      <MoveImage
        initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
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
        className={`text-main-color ms-4 ${index % 2 === 0 ? "order-1" : "order-2"}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 200 : -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div>
          <h3 className="text-[50px] font-semibold mb-2">
            {index + 1}. {title}
          </h3>
          <h4 className="text-[60px] font-bold mb-4 w-full">{subtitle}</h4>

          <div className="space-y-3">
            {description.map((item, i) => (
              <p key={i} className=" text-[33px]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
