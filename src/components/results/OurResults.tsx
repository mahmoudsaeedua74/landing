import React from "react";
import dynamic from "next/dynamic";
const OurResultsitem = dynamic(() => import("./OurResultsitem"));
const ResultNumber = dynamic(() => import("./ResultNumber"));

export default function OurResults() {
  return (
    <section className=" contain">
      <OurResultsitem />
      <ResultNumber />
    </section>
  );
}
