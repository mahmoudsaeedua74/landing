"use client";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaExclamation } from "react-icons/fa";
import { motion } from "framer-motion";
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
  const renderIcon = () => {
    switch (icon) {
      case "fa":
        return (
          <FaQuestion
            className="inline-block ms-2 text-second-color   "
            size={60}
          />
        );
      case "dot":
        return (
          <GoDotFill
            className="inline-block ms-2 text-second-color"
            size={60}
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
      className="text-center text-[4.5625rem] text-main-color"
      {...moveHeader}
    >
      {title}
      {renderIcon()}
    </motion.h2>
  );
}
