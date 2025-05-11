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

export default function Footer() {
  return (
    <>
      <div className="contain">
        <Banner />
      </div>
      <footer className="bg-[#787B7E]  text-white pb-4 pt-12">
        <div className="contain mt-14">
          <Image src={logo} alt="ClickShare Logo" width={280} height={60} />
          <div className="lg:grid-cols-4 text-[25px] justify-items-center md:grid-cols-2 grid-cols-1 grid gap-8 mb-10 mt-8">
            <div className="">
              <p className=" mb-4">
                هي شركــــة سعوديـــــة متخصصـــة فــي الدروبشيبينج وخدمات
                التجــارة الإلكترونيــة. تقدم حلولاً متكاملة مثل تصميــم
                المتاجــر، إدارة الإعلانات، وخدمة العملاء، بهدف تمكين رواد
                الأعمال من بناء مشاريع ناجحة بسهولة واحترافيــــة.
              </p>
              <p className="text-[32px] mb-2">تابعنا على:</p>
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
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    عن كليك شير
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    كيف تعمل
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    الوظائف{" "}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    الأسئلة المتكررة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    الشروط والأحكام
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    سياسة الخصوصية
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    مركز المساعدة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300">
                    مركز المساعدة
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row justify-between items-center text-[20px]">
            <div>
              <p>جميع الحقوق محفوظة لشركة كليك شير © 2025</p>
            </div>

            <div className="flex gap-10">
              <div className="flex items-center mb-4 md:mb-0">
                <FaMapMarkerAlt className="me-2" size={40} />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center mb-4 md:mb-0">
                <MdEmail className="me-2" size={40} />
                <span>info@clickshare.store</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
