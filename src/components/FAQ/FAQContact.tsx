import React from "react";
import { Button } from "../ui/Button/Button";

export default function FAQContact() {
  return (
    <>
      <h3 className="text-[1.6875rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.6875rem] font-bold text-[#1e5a7e] mb-4">
        لم تحصل على إجابة استفسارك بعد؟
      </h3>
      <p className="text-base  md:text-[1.5rem]    lg:text-[2rem]  text-[#1e5a7e] mb-8">
        راسلنا الآن و سيتم الإجابة عن جميع أسئلتك
      </p>
      <Button variant={"textMain"} className="w-fit " size={"xl"}>
        تواصل معنا!
      </Button>
    </>
  );
}
