"use client";

import { TestimonialCardProps } from "@/types/item";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { animation } from "@/utils/animation";
export function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <motion.div
      className="py-40 px-4 relative z-0"
      key={item.id}
      {...animation}
      custom={item.id}
    >
      <div
        className="relative bg-[#FCB346] rounded-2xl py-8 px-8 md:px-12 transition-all duration-300 hover:scale-150 hover:shadow-2xl"
        dir="ltr"
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden mr-4">
            <div className="relative w-full h-full">
              <Image
                src={item.avatar}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-800 text-sm">{item.title}</p>
          </div>
        </div>
        <p className="text-base mb-4 text-black font-bold max-w-3xl line-clamp-4">
          {item.text}
        </p>
        <div className="flex space-x-1">
          {[...Array(item.rating)].map((_, i) => (
            <span key={i} className="text-white text-4xl">
              ★
            </span>
          ))}
        </div>
        <div
          className="absolute -bottom-8 left-0 w-24 h-12 bg-[#FCB346]"
          style={{
            clipPath:
              "polygon(0% 0%, 100% 0%, 22.04% 83.3%, 20% 85%, 18% 86.2%, 16% 87%, 14% 87.3%, 12% 87.4%, 10% 87.3%, 8% 87%, 6% 86.2%, 4% 85%, 2.5% 83.3%, 1.5% 81%, 0.8% 79%, 0.3% 77%, 0% 75.6%, 0% 70.46%)",
          }}
        ></div>
      </div>
    </motion.div>
  );
}
