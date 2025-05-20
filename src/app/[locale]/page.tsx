"use client";
import dynamic from "next/dynamic";
const ChoseUs = dynamic(() => import("@/components/ChoseUs/ChoseUs"));
const OurService = dynamic(() => import("@/components/Service/OurService"));
const FAQ = dynamic(() => import("@/components/FAQ/Faq"));
const HowWeWork = dynamic(() => import("@/components/HowWeWork/HowWeWork"));
const OurExperience = dynamic(
  () => import("@/components/OurExperience/OurExperience")
);
const Testimonial = dynamic(() => import("@/components/OurReviews/Rewie"));
const OurResults = dynamic(() => import("@/components/results/OurResults"));

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <OurService />
      <OurExperience />
      <ChoseUs />
      <HowWeWork />
      <Testimonial />
      <OurResults />
      <FAQ />
    </main>
  );
}
