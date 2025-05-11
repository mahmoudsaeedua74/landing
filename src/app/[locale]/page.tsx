"use client";

import ChoseUs from "@/components/ChoseUs/ChoseUs";
import FAQ from "@/components/FAQ/Faq";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import OurExperience from "@/components/OurExperience/OurExperience";
import Testimonial from "@/components/OurReviews/Rewie";
import OurResults from "@/components/results/OurResults";
import OurService from "@/components/Service/OurService";

export default function Home() {
  return (
    <main className=" ">
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
