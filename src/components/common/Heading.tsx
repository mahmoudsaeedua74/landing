"use client";
import React from "react";
import { GoSquareFill } from "react-icons/go";
import { FaExclamation } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
const moveHeader = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { amount: 0.1, once: false },
  transition: { duration: 0.5, ease: "easeOut" },
};
export default function Heading({
  title,
  icon,
}: {
  title: string;
  icon: "fa" | "dot" | "mark";
}) {
  const t = useTranslations("title");
  const renderIcon = () => {
    switch (icon) {
      case "fa":
        return <span className="inline-block ms-2 text-second-color ">؟</span>;
      case "dot":
        return (
          <GoSquareFill
            className="inline-block ms-2 mt-6 text-second-color "
            size={20}
          />
        );
      case "mark":
        return (
          <FaExclamation
            className="inline-block ms-2 text-second-color"
            size={60}
          />
        );
      default:
        return null;
    }
  };

  return (
    <motion.h2
      className="text-center text-[1.5625rem]  sm:text-[2.5625rem] md:text-[3.5625rem] lg:text-[4.5625rem] text-main-color"
      {...moveHeader}
    >
      {t(title)}
      {renderIcon()}
    </motion.h2>
  );
}
