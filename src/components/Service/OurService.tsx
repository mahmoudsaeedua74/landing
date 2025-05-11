import React from "react";
import Heading from "../common/Heading";
import CarouselImage from "./CarouselImage";

export default function OurService() {
  return (
    <section className="space-between">
      <Heading title={"OurService"} icon={"fa"} />
      <CarouselImage />
    </section>
  );
}
