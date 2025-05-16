"use client";

import React from "react";
import { Button } from "../ui/Button/Button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("Footer");
  return (
    <div className="bg-second-color z-50 translate-y-12 text-center  m-4 sm:m-0 c text-white py-16 md:py-24 lg:py-40 px-4 md:px-12 lg:px-40 rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-base sm:text-4xl md:text-6xl lg:text-[93px] font-bold mb-6 ">
          {t("StartContactTitle")}{" "}
        </h3>
        <p className=" text-base sm:text-2xl  md:text-[30px] mb-10 ">
          {t("StartContactDescription")}
        </p>
        <Button variant={"second"} size={"second"}>
          {t("StartContactButton")}
        </Button>
      </motion.div>
    </div>
  );
}
