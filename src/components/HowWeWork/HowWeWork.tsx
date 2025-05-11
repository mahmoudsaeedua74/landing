"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../common/Heading";
import { animation } from "@/utils/animation";
const stepsData = [
  {
    step: 1,
    title: "الربط مع المتاجر الإلكترونية",
    position: "top",
    color: "#48BEE4",
  },
  {
    step: 2,
    title: "التسوق بالعمولة",
    position: "bottom",
    color: "#3B98BC",
  },
  {
    step: 3,
    title: "التوريد/ التخليص الجمركي",
    position: "top",
    color: "#2E7BA2",
  },
  {
    step: 4,
    title: "الاستيراد/التخليص الجمركي",
    position: "bottom",
    color: "#256184",
  },
  {
    step: 5,
    title: "الشحن ومراكز الاتصال",
    position: "top",
    color: "#8A5A28",
  },
  {
    step: 6,
    title: "تحصيل الكاشات",
    position: "bottom",
    color: "#B77B34",
  },
  {
    step: 7,
    title: "المحافظ الرقمية",
    position: "top",
    color: "#E19A3D",
  },
  {
    step: 8,
    title: "الربط مع المتاجر الإلكترونية",
    position: "bottom",
    color: "#F9B03F",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 space-y-28  container mx-auto px-4 overflow-hidden text-[#2E6D88] text-[20px]  font-bold">
      <Heading title="كيف تعمل Clickshare" icon="fa" />
      <div className=" relative flex gap-6 py-20">
        {stepsData.map((item) => (
          <motion.div
            className="flex flex-col items-center relative"
            key={item.step}
            {...animation}
            custom={item.step}
          >
            <div
              className={` px-14   flex items-center font-medium justify-center text-white  relative`}
              style={{
                backgroundColor: item.color,
                clipPath:
                  "polygon(100% 0, 15% 0, 0% 50%, 15% 100%, 100% 100%, 90% 50%)",
              }}
            >
              step {item.step}
            </div>
            {item.position === "top" ? (
              <div className="flex flex-col items-center absolute top-0 text-center">
                <div
                  className="w-0.5 h-20 "
                  style={{ backgroundColor: item.color }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="mb-2"> {item.title} </div>
              </div>
            ) : (
              <div className="flex flex-col items-center absolute bottom-0 text-center">
                <div className="mb-2"> {item.title} </div>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div
                  className="w-0.5 h-20"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
