"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareSnapchat,
  FaSquareXTwitter,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import logo from "../../../public/images/white.png";
import Banner from "./Banner";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <>
      <div className="contain overflow-hidden">
        <Banner />
      </div>
      <footer className="bg-[#787B7E] overflow-x-hidden  text-white pb-4 pt-12">
        <div className="contain mt-14">
          <Image src={logo} alt="ClickShare Logo" width={280} height={60} />
          <div className="lg:grid-cols-4 text-[25px] justify-items-center md:grid-cols-2 grid-cols-1 grid gap-8 mb-10 mt-8">
            <div className="">
              <p className="mb-4">{t("FooterDescription")}</p>
              <p className="text-[32px] mb-2">{t("FooterFollowUs")}</p>
              <div className="flex mt-4 gap-4">
                <Link href="#" className="hover:text-gray-300">
                  <FaInstagram size={40} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <FaSquareFacebook size={40} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <FaLinkedin size={40} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <FaSquareXTwitter size={40} />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <FaSquareSnapchat size={40} />
                </Link>
              </div>
            </div>
            <div className="">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink1")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink2")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink3")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink4")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink5")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink6")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink7")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink8")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink10")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    {t("FooterLink9")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[20px]">
            <div>
              <p>{t("FooterRights")}</p>
            </div>
            <div className="flex gap-10">
              <div className="flex items-center mb-4 md:mb-0">
                <FaMapMarkerAlt className="me-2" size={40} />
                <span>{t("FooterLocation")}</span>
              </div>
              <div className="flex items-center mb-4 md:mb-0">
                <MdEmail className="me-2" size={40} />
                <span>{t("FooterEmail")}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
