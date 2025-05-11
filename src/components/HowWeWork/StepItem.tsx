"use client";
import React from "react";
import { motion } from "framer-motion";

interface StepItemProps {
  step: number;
  title: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

export default function StepItem({
  step,
  title,
  subtitle,
  color,
  icon,
  isLast = false,
}: StepItemProps) {
  return (
    <div className="flex flex-col items-center relative">
      {/* Step number */}
      <motion.div
        className={`w-24 h-10 flex items-center justify-center text-white font-bold rounded-md z-10`}
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: step * 0.1 }}
      >
        step {step}
      </motion.div>

      {/* Connector line */}
      {!isLast && (
        <div className="w-full h-1 bg-gray-200 absolute top-5 left-1/2 z-0" />
      )}

      {/* Icon */}
      <motion.div
        className={`w-10 h-10 rounded-full flex items-center justify-center mt-8 text-white`}
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: step * 0.1 + 0.2 }}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-main-color text-lg font-bold mt-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: step * 0.1 + 0.3 }}
      >
        {title}
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        className="text-gray-600 text-sm mt-2 text-center max-w-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: step * 0.1 + 0.4 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
