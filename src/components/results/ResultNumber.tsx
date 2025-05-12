"use client";
import React from "react";
import { motion } from "framer-motion";
import { animation } from "@/utils/animation";
import StatItem from "./StatItem";
const stats = [
  {
    id: 1,
    number: 20,
    title: "ResultNumberTitle1",
    description: "ResultNumberDescription1",
  },
  {
    id: 2,
    number: 10,
    title: "ResultNumberTitle2",
    description: "ResultNumberDescription2",
  },
  {
    id: 3,
    number: 17,
    title: "ResultNumberTitle3",
    description: "ResultNumberDescription3",
  },
];
export default function ResultNumber() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
          {stats.map((stat) => (
            <motion.div key={stat.id} {...animation} custom={stat.id}>
              <StatItem
                number={stat.number}
                title={stat.title}
                description={stat.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
