import React from "react";
import dynamic from "next/dynamic";
const Heading = dynamic(() => import("../common/Heading"));
const CarouselImage = dynamic(() => import("./CarouselImage"));

export default function OurService() {
  return (
    <section className="space-between" id="services">
      <Heading title={"OurService"} icon={"fa"} />
      <CarouselImage />
    </section>
  );
}
