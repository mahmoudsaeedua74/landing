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
import { useTranslations } from "next-intl";
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
    title: "FashionAndOperations",
    color: "main" as const,
  },
  {
    icon: console,
    id: 2,
    title: "DigitalProducts",
    color: "second" as const,
  },
  {
    icon: cosmetics,
    id: 3,
    title: "HealthAndFitness",
    color: "main" as const,
  },
  {
    icon: computer,
    id: 4,
    title: "Electronics",
    color: "second" as const,
  },

  {
    icon: care,
    id: 5,
    title: "CareAndBeauty",
    color: "main" as const,
  },
];
export default function OurExperience() {
  const t = useTranslations("Categories");
  return (
    <section className="contain space-between"  > 
      <Heading title="OurExperience" icon="dot" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
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
              title={t(item.title)}
              color={item.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
