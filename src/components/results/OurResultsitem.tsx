import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import map from "../../../public/assets/7. rev/man.png";
const item = {
  image: map,
  id: 0,
  subtitle: "  قيادة متجرك الإلكتروني بنجاح من خلال الأرقام القوية",
  description: [
    "نجاح أي متجر إلكتروني لا يعتمد فقط على المنتجات.",
    "أو التصميم, بل فهم الأرقام وتحليلها بذكاء ,",
    "من خلال تتبع الأداء واكتشاف نقاط القوة والضعف",
    "تقدر تطور استراتيجيتك, تحسن تجربة العميل",
    " وتحقق نمو فقال ومستمر",
  ],
};
export default function OurResults() {
  return (
    <div className="flex flex-col xl:flex-row overflow-hidden gap-8 py-12 items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        className="relative order-2 md:order-1 flex-shrink-0"
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={item.image}
          alt={item.subtitle}
          width={650}
          height={500}
          className="rounded-lg"
        />
      </motion.div>
      <motion.div
        className="text-main-color  lg:w-1/2"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="sm:px-6 max-w-full">
          <h3 className="text-[clamp(1.5rem,4vw,4.1rem)]   font-bold mb-2 text-[#1e5a7e] ">
            {item.subtitle}
          </h3>
          <div className=" text-[clamp(1.25rem,4vw,2.1rem)] text-[#1e5a7e]">
            {item.description.map((item) => (
              <p key={item}> {item}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
