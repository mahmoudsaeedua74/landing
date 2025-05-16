"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { animation } from "@/utils/animation";
const stepsData = [
  {
    step: 1,
    title: "HowWeWorkStep1Title",
    position: "top",
    color: "#48BEE4",
  },
  {
    step: 2,
    title: "HowWeWorkStep2Title",
    position: "bottom",
    color: "#3B98BC",
  },
  {
    step: 3,
    title: "HowWeWorkStep3Title",
    position: "top",
    color: "#2E7BA2",
  },
  {
    step: 4,
    title: "HowWeWorkStep4Title",
    position: "bottom",
    color: "#256184",
  },
  {
    step: 5,
    title: "HowWeWorkStep5Title",
    position: "top",
    color: "#8A5A28",
  },
  {
    step: 6,
    title: "HowWeWorkStep6Title",
    position: "bottom",
    color: "#B77B34",
  },
  {
    step: 7,
    title: "HowWeWorkStep7Title",
    position: "top",
    color: "#E19A3D",
  },
  {
    step: 8,
    title: "HowWeWorkStep8Title",
    position: "bottom",
    color: "#F9B03F",
  },
];
export default function StepItem() {
  const t = useTranslations("HowWeWork");

  return (
    <div className=" relative flex gap-6 py-20 flex-wrap justify-around">
      {stepsData.map((item) => (
        <motion.div
          className={`flex flex-col items-center relative ${
            item.position === "top"
              ? "mb-32 sm:mb-56 "
              : " mt-32 sm:mb-56 sm:mt-0"
          }`}
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
              <div className="mb-2"> {t(item.title)} </div>
            </div>
          ) : (
            <div className="flex flex-col items-center absolute bottom-0 text-center">
              <div className="mb-2"> {t(item.title)} </div>
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
  );
}
