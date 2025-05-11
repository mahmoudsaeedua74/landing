import React from "react";
import { Button } from "../ui/Button/Button";
export default function Banner() {
  return (
    <div className="bg-second-color z-20 translate-y-12 text-center  m-4 sm:m-0 c text-white py-16 md:py-24 lg:py-40 px-4 md:px-12 lg:px-40 rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[100px]">
      <div>
        <h3 className="text-base sm:text-4xl md:text-6xl lg:text-[93px] font-bold mb-6 ">
          هل انت جاهز للبدء؟
        </h3>
        <p className=" text-base sm:text-2xl  md:text-[30px] mb-10 ">
          تواصل الآن مع ممثل خدمة العملاء لدينا للحصول على مزيد من التفاصيل.
      
          اطلب مزيدًا من المعلومات حول خدماتنا لتلبية احتياجات عملك.
        </p>
        <Button variant={"second"} size={"second"}>
          ابدأ الآن
        </Button>
      </div>
    </div>
  );
}
