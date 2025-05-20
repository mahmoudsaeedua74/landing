"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import dynamic from "next/dynamic";
const Heading = dynamic(() => import("../common/Heading"));
const FAQList = dynamic(() => import("./FAQList"));
const FAQContact = dynamic(() => import("./FAQContact"));
export default function FAQ() {
  const locale = useLocale();
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <Heading title="FAQ" icon="mark" />
        <div className="flex flex-col lg:flex-row mt-12 gap-8">
          <motion.div
            className=" w-full lg:w-1/2 "
            initial={{ opacity: 0, x: locale === "ar" ? 200 : -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FAQContact />
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: locale === "ar" ? -200 : 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <FAQList />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
