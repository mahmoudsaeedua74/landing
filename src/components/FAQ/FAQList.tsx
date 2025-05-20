"use client";

import React from "react";
import dynamic from "next/dynamic";
interface FAQItem {
  question: string;
  answer: string;
  id: number;
}
const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "FAQQuestion1",
    answer: "FAQAnswer1",
  },
  {
    id: 2,
    question: "FAQQuestion2",
    answer: "FAQAnswer2",
  },
  {
    id: 3,
    question: "FAQQuestion3",
    answer: "FAQAnswer3",
  },
  {
    id: 4,
    question: "FAQQuestion4",
    answer: "FAQAnswer4",
  },
];
const FAQItem = dynamic(() => import("./FAQItem"));
export default function FAQList() {
  return (
    <div className="space-y-2">
      {faqItems.map((item, index) => (
        <FAQItem
          key={item.id}
          id={item.id}
          index={index}
          totalItems={faqItems.length}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
