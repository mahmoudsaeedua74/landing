"use client";

import React from "react";
import Heading from "../common/Heading";
import FAQList from "./FAQList";
import FAQContact from "./FAQContact";
const faqItems = [
  {
    question: "ما هي التكاليف المتعلقة للخدمة؟",
    id: 1,
    answer: "ما هي التكاليف المتعلقة للخدمة؟",
  },
  {
    question: "ما هو مصدر المنتجات؟",
    id: 2,
    answer: "ما هي التكاليف المتعلقة للخدمة؟",
  },
  {
    question: "هل خدمة الاستضافة مجانية؟",
    id: 3,
    answer: "ما هي التكاليف المتعلقة للخدمة؟",
  },
  {
    question: "هل يتم الحصول علي فيزا credit من خلالنا؟",
    id: 4,
    answer: "ما هي التكاليف المتعلقة للخدمة؟",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Heading title="FAQ" icon="mark" />
        <div className="flex flex-col lg:flex-row mt-12 gap-8">
          <div className=" w-full lg:w-1/2 ">
            <FAQContact />
          </div>
          <div className="w-full lg:w-1/2">
            <FAQList faqItems={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
