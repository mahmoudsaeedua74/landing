"use client";
import React, { useState } from "react";
import logo from "../../../public/images/colored.png";
import Image from "next/image";
import { Button } from "../ui/Button/Button";
import { useTranslations } from "next-intl";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import dynamic from "next/dynamic";
const MobileSidebar = dynamic(() => import("./MobileSidebar"));
const Translations = dynamic(() => import("./Translations"));

export default function Navbar() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 pt-[4.25rem] text-main-color relative">
      <div className="contain flex justify-between items-center">
        <Image
          src={logo}
          alt="this is logo of page"
          width={180}
          height={80}
          className="aspect-auto object-cover xl:me-2 2xl:me-4"
        />
        {isMenuOpen ? null : (
          <div className="xl:hidden text-main-color focus:outline-none flex items-center ">
            <button onClick={toggleMenu}>
              <HiMenu size={50} />
            </button>
            <Translations />
          </div>
        )}

        <div className="hidden xl:flex xl:items-center xl:justify-between xl:flex-1 ">
          <ul className="flex text-[clamp(1.25rem,1.62vw,1.825rem)] lg:gap-3 2xl:gap-6 xl:gap-2  mx-auto ">
            <a href={"#home"} className="hover:text-opacity-80 cursor-pointer">
              {t("home")}
            </a>
            <a
              href={"#services"}
              className="hover:text-opacity-80 cursor-pointer"
            >
              {t("services")}
            </a>
            <a
              href={"#howItWorks"}
              className="hover:text-opacity-80 cursor-pointer"
            >
              {t("howItWorks")}
            </a>
            <a href={"#blog"} className="hover:text-opacity-80 cursor-pointer">
              {t("blog")}
            </a>
            <a href={"#faq"} className="hover:text-opacity-80 cursor-pointer">
              {t("faq")}
            </a>
            <a
              href={"#helpCenter"}
              className="hover:text-opacity-80 cursor-pointer"
            >
              {t("helpCenter")}
            </a>
          </ul>
          <div className="flex  items-center">
            <Button variant="textMain" size="lg">
              <Link
                href={"https://v4.clickshare.store/register"}
                target="_blank"
              >
                {t("signIn")}
              </Link>
            </Button>
            <Translations />
          </div>
        </div>
        {isMenuOpen && (
          <MobileSidebar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        )}
      </div>
    </nav>
  );
}
