"use client";
import React from "react";
import hero from "../../../public/assets/1.banner/banner visual.png";
import flags from "../../../public/assets/1.banner/flags.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button/Button";
const MotionImage = motion(Image);
type props = {
  position: "x" | "y";
  deg: number;
};
const moveAnimation = ({ position, deg }: props) => {
  return {
    initial: { [position]: deg, opacity: 0 },
    animate: { [position]: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };
};
export default function HeaderContent() {
  return (
    <section className="flex flex-row justify-between items-center container  mx-auto gap-4 lg:gap-12 mt-8 px-4 lg:px-0 ">
      <motion.div
        className="w-full"
        {...moveAnimation({ position: "x", deg: 250 })}
      >
        <div className="ms-[8.375rem]">
          <h1 className="text-4xl md:text-5xl lg:text-[4.375rem] font-medium text-main-color">
            <span className="font-bold">نرتقي</span> بأعمـــــــالك إلى
          </h1>
          <h2 className="text-3xl md:text-5xl mb-12 mt-6 lg:text-[4.375rem] font-bold text-second-color">
            مستويات جديدة
          </h2>
          <div className="max-w-lg">
            <p className="text-lg text-main-color font-semibold text-[1.4375rem] mb-8">
              نرتقي بأعمالك إلى آفاق جديدة من خلال تقديم خدمات احترافية ومبتكرة
              تشمل
              <span className="font-bold">
                {" "}
                مركز الاتصال، التصميم الإبداعي، تحسين محركات البحث، التجارة
                الإلكترونية، إدارة منصات التواصل الاجتماعي، وإدارة الحملات
                الإعلانية.
              </span>
            </p>
          </div>
          <div className="ms-40">
            <Button variant="textMain" size="xl">
              ابدأ الآن
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-10 text-main-color text-xl font-semibold">
          <p>نعمل في </p>
          <Image src={flags} alt="نعمل في " width={120} height={80} priority />
        </div>
      </motion.div>
      <MotionImage
        src={hero}
        alt="خدمات تطوير الأعمال"
        width={680}
        height={400}
        className="aspect-auto  object-cover"
        priority
        {...moveAnimation({ position: "y", deg: -100 })}
      />
    </section>
  );
}
