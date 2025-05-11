"use client";
import React from "react";
import hero from "../../../public/assets/1.banner/banner visual.png";
import flags from "../../../public/assets/1.banner/flags.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button/Button";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("HeaderContent");
  return (
    <section className="flex flex-row justify-between items-center contain gap-4 lg:gap-12 mt-8  lg:px-0 !text-base  text-main-color">
      <motion.div
        className="w-full"
        {...moveAnimation({ position: "x", deg: 250 })}
      >
        <div className="xl:ms-[8.375rem] !text-base">
          <h1
            className="
              text-2xl  sm:text-[1.975rem] md:text-[2.975rem]  lg:text-[2.7rem] leading-normal  xl:text-[3.2rem]  2xl:text-[4.375rem] font-medium "
          >
            <span className="font-bold">{t("titleLine1")}</span>{" "}
           
          </h1>
          <h2
            className="mt-2 mb-3  md:mb-8 md:mt-4 
       text-2xl sm:text-[1.975rem] md:text-[2.975rem] xl:leading-none  lg:text-[2.7rem]  xl:text-[3rem]  2xl:text-[4.375rem] font-bold text-second-color"
          >
            {t("titleLine3")}{" "}
          </h2>

          <div className="sm:max-w-xl text-[.9rem] sm:text-[1.2375rem] sm:leading-7 md:leading-10  md:text-[1.4375rem] ">
            <p className="font-semibold sm:mb-8">
              {t("description")}{" "}
              <span className="font-bold "> {t("description2")}</span>
            </p>
          </div>
          <div className="md:ms-40 my-2 sm:my-6 md:my-10 ">
            <Button variant="textMain" size="xl">
              {t("button")}
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4  mb-4  font-semibold text-[12px] sm:text-xl ">
          <p> {t("weWorkIn")} </p>
          <Image
            src={flags}
            alt={t("weWorkIn")}
            width={70}
            height={80}
            priority
            className="w-[20vw] sm:w-[90px] aspect-auto  object-cover"
          />
        </div>
      </motion.div>

      <MotionImage
        src={hero}
        alt="خدمات تطوير الأعمال"
        width={680}
        height={400}
        className="aspect-auto  object-cover w-[40vw] sm:self-end sm:w-[290px] md:w-[380px] lg:w-[600px] xl:w-[680px]"
        priority
        {...moveAnimation({ position: "y", deg: -100 })}
      />
    </section>
  );
}
