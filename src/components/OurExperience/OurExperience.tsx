"use client";
import React from "react";
import Heading from "../common/Heading";
import ExperienceItem from "./ExperienceItem";
import { motion } from "framer-motion";
import care from "../../../public/assets/care_7273461.png";
import computer from "../../../public/assets/computer_6343916.png";
import console from "../../../public/assets/console_1737328.png";
import cosmetics from "../../../public/assets/cosmetics_3163173.png";
import dress from "../../../public/assets/dress_4508274.png";

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
const experienceItems = [
  {
    icon: dress,
    id: 1,
    title: "عمليات و أزياء",
    color: "main" as const,
  },
  {
    icon: console,
    id: 2,
    title: "المنتجات الرقمية",
    color: "second" as const,
  },
  {
    icon: cosmetics,
    id: 3,
    title: "صحة و اللياقة",
    color: "main" as const,
  },
  {
    icon: computer,
    id: 4,
    title: "الالكترونيات",
    color: "second" as const,
  },

  {
    icon: care,
    id: 5,
    title: "العناية و الجمال",
    color: "main" as const,
  },
];
export default function OurExperience() {
  return (
    <section className="py-16 container mx-auto">
      <Heading title="انطلق بتجارتك مهما كان قطاعك" icon="dot" />

      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        {...containerAnimation}
      >
        {experienceItems.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            custom={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <ExperienceItem
              icon={item.icon}
              title={item.title}
              color={item.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
