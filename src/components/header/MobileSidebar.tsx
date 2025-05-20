"use client";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { Button } from "../ui/Button/Button";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/images/colored.png";
import dynamic from "next/dynamic";
  const Translations = dynamic(() => import("./Translations"));

export default function MobileSidebar({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}) {
  const t = useTranslations("Header");
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-[60]"
        onClick={() => setIsMenuOpen(false)}
      />
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-[300px] bg-white z-[61] p-4 space-y-6 shadow-xl "
      >
        <div className="flex justify-between items-center">
          <Image
            alt="Logo"
            src={logo}
            className="object-cover"
            width={150}
            height={75}
            priority
            loading="eager"
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
        <div>
          <ul className="flex flex-col gap-4 text-xl">
            <li className=" py-2 border-b">{t("home")}</li>
            <li className=" py-2 border-b">{t("services")}</li>
            <li className=" py-2 border-b">{t("howItWorks")}</li>
            <li className=" py-2 border-b">{t("blog")}</li>
            <li className=" py-2 border-b">{t("faq")}</li>
            <li className=" py-2 border-b">{t("helpCenter")}</li>
          </ul>
        </div>
        <div className="flex items-end ">
          <Button variant="textMain" size="lg">
            {t("signIn")}
          </Button>
          <Translations />
        </div>
      </motion.div>
    </nav>
  );
}
