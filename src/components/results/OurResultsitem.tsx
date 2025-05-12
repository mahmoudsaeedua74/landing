import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import map from "../../../public/assets/7. rev/man.png";
import { useLocale, useTranslations } from "next-intl";
const item = {
  image: map,
  id: 0,
  subtitle: "OurResultsSubtitle",
  description: [
    "OurResultsDescription1",
    "OurResultsDescription2",
    "OurResultsDescription3",
    "OurResultsDescription4",
    "OurResultsDescription5",
  ],
};
export default function OurResults() {
  const locale = useLocale();
  const t = useTranslations("OurResults");
  return (
    <div className="flex flex-col xl:flex-row overflow-hidden gap-8 items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, x: locale === "ar" ? -200 : 200 }}
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
        initial={{ opacity: 0, x: locale === "ar" ? 200 : -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="sm:px-6 max-w-full">
          <h3 className="text-[clamp(1.5rem,4vw,4.1rem)]   font-bold mb-2 text-[#1e5a7e] ">
            {t(item.subtitle)}
          </h3>
          <div className=" text-[clamp(1.25rem,4vw,2.1rem)] text-[#1e5a7e]">
            {item.description.map((item) => (
              <p key={item}> {t(item)}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
