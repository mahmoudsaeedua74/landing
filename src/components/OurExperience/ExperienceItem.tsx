"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
interface ExperienceItemProps {
  icon: string | StaticImageData;
  title: string;
  color: "main" | "second";
}



export default function ExperienceItem({
  icon,
  title,
  color,
}: ExperienceItemProps) {
  return (
    <div
      className={` flex flex-col items-center justify-center text-[37px] border-[2px] rounded-[30px] p-2  ${
        color === "main" ? "border-main-color" : "border-second-color"
      }`}
  
    >
      <Image src={icon} width={80} height={80} alt={title} />

      <p
        className={`mt-4 text-center  ${
          color === "main" ? "text-main-color" : "text-second-color"
        }`}
      >
        {title}
      </p>
    </div>
  );
}
