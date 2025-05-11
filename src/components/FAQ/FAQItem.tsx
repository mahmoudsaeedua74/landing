"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer?: string;
  id: number;
  totalItems: number;
  index: number;
}

export default function FAQItem({id, question, answer, totalItems ,index}: FAQItemProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };
  console.log(totalItems)
  console.log(id,"id")
  return (
  <div className={`py-8 ${index !== totalItems - 1 ? "border-b-[1.2px] border-black" : ""}`}>
      <button
        className="flex items-center justify-between w-full  "
        onClick={() => toggleOpen(id)}
      >
        <h3 className="text-[1.25rem] sm:text-[1.75rem] md:text-[2.62rem] font-medium text-[#1e5a7e]">
          {question}
        </h3>
        <div className="text-[#1e5a7e]">
          {openIndex === id ? <FaMinus /> : <FaPlus />}
        </div>
      </button>

      <AnimatePresence>
        {openIndex === id && answer && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-lg text-[#1e5a7e] ">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
