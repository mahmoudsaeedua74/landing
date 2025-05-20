"use client";
import React from "react";
import dynamic from "next/dynamic";
const Heading = dynamic(() => import("../common/Heading"));
const StepItem = dynamic(() => import("./StepItem"));
export default function HowWeWork() {
  return (
    <section
      id="howItWorks"
      className=" space-y-28  container mx-auto px-4 overflow-hidden text-[#2E6D88] text-[20px]  font-bold"
    >
      <Heading title="HowWeWork" icon="fa" />
      <StepItem />
    </section>
  );
}
