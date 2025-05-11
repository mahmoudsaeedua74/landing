"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { useLocale } from "next-intl";
import Link from "next/link";
export default function Translations() {
  const [localizationOpen, setLocalizationOpen] = useState(false);
  const localizationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        localizationRef.current &&
        !localizationRef.current.contains(event.target as Node)
      ) {
        setLocalizationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const locale = useLocale();
  console.log(locale);
  return (
    <div className="relative" ref={localizationRef}>
      <button
        className="flex items-center rounded-full focus:outline-none"
        onClick={() => setLocalizationOpen(!localizationOpen)}
      >
        <span className="flex items-center">
          {localizationOpen ? (
            <IoMdArrowDropup size={35} className="text-second-color mt-4" />
          ) : (
            <MdArrowDropDown size={35} className="text-second-color mt-4" />
          )}
          <span className="text-3xl font-semibold leading-none ">
            {locale === "ar" ? "ع" : <RiEnglishInput size={30} />}
          </span>
        </span>
      </button>

      {localizationOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white border cursor-pointer  rounded-lg  py-2 z-10">
          <ul className="">
            <li className=" px-4 py-2  hover:bg-gray-100  transition-colors duration-200 text-3xl">
              <Link href={`/${locale === "en" ? "ar" : "en"}`}>
                {locale === "ar" ? <RiEnglishInput size={30} />:  "ع"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
