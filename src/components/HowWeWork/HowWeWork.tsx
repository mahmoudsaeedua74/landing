"use client";
import React from "react";
import Heading from "../common/Heading";
import StepItem from "./StepItem";
export default function HowWeWork() {
  return (
    <section className=" space-y-28  container mx-auto px-4 overflow-hidden text-[#2E6D88] text-[20px]  font-bold">
      <Heading title="HowWeWork" icon="fa" />
      <StepItem />
    </section>
  );
}
