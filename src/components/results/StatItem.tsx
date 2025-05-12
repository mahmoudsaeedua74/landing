"use client";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
interface StatItemProps {
  number: number;
  title: string;
  description: string;
}
export default function StatItem({
  number,
  title,
  description,
}: StatItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.6 });
  const [count, setCount] = useState(0);
  const t = useTranslations("ResultNumber");

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = number;
    const duration = 1000;
    const stepTime = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, number]);
  return (
    <div className="flex flex-col  text-main-color">
      <p ref={ref} className="text-[3rem] md:text-[5.1875rem] font-bold">
        {count}k+
      </p>
      <p className="text-[32px] md:text-[48px]">{t(title)}</p>
      <p className="text-[24px] md:text-[31px]">{t(description)}</p>
    </div>
  );
}
