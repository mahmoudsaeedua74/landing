import React from "react";
import Heading from "../common/Heading";
import CarouselImage from "./CarouselImage";

export default function OurService() {
  return (
    <section className="my-28 space-y-24 overflow-hidden">
      <Heading title={"تعرف علي خدماتنا الخدمات"} icon={"fa"} />
      <CarouselImage />
    </section>
  );
}
