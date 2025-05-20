"use client";
import React from "react";
import { Button } from "../ui/Button/Button";
import { useTranslations } from "next-intl";
export default function FAQContact() {
  const t = useTranslations("FAQ");
  return (
    <div className=" my-10 bg-gray-50 px-8 py-16  rounded-3xl flex flex-col  gap-y-4 justify-center  border">
      <h3 className="text-[1.6875rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.6875rem] font-bold text-[#1e5a7e] mb-4">
        {t("FAQContactTitle")}
      </h3>
      <p className="text-base  md:text-[1.5rem]    lg:text-[2rem]  text-[#1e5a7e] mb-8">
        {t("FAQContactDescription")}
      </p>
      <Button variant={"textMain"} className="w-fit " size={"xl"}>
        {t("FAQContactButton")}
      </Button>
    </div>
  );
}
