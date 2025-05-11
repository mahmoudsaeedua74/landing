import React from "react";
import logo from "../../../public/images/colored.png";
import Image from "next/image";
import { Button } from "../ui/Button/Button";
export default function Navbar() {
  return (
    <nav className="mt-[4.25rem] text-main-color flex gap-[4.975rem] text-[1.625rem] justify-center items-center contain">
      {/* logo */}
      <Image
        src={logo}
        alt="this is logo of page"
        width={220}
        height={100}
        className="aspect-auto object-cover"
      />
      {/* menu */}
      <ul className="flex gap-14">
        <li>الصفحة الرئيسية </li>
        <li> الخدمات </li>
        <li>كيف نعمل ؟ </li>
        <li> المدونة </li>
        <li> الأسئلة الشائعة </li>
        <li> مركز المساعدة </li>
      </ul>
      {/* sing in */}
      <div className="flex gap-5 items-center">
        <Button variant="textMain" size="lg">
          تسجيل الدخول
        </Button>
        {/* translate*/}
        <button className="font-bold ">ع</button>
      </div>
    </nav>
  );
}
