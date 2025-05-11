"use client";

import React from "react";
import FAQItem from "./FAQItem";

interface FAQItem {
  question: string;
  answer: string;
  id: number;
}

interface FAQListProps {
  faqItems: FAQItem[];
}
export default function FAQList({ faqItems }: FAQListProps) {
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
