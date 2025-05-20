import React from "react";
import dynamic from "next/dynamic";
  const Navbar = dynamic(() => import("./Navbar"));
  const HeaderContent = dynamic(() => import("./HeaderContent"));


export default function Header() {
  return (
    <header className="overflow-x-hidden">
      <Navbar />
      <HeaderContent />
    </header>
  );
}
