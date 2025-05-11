import React from "react";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <header className="overflow-hidden">
      <Navbar />
      <HeaderContent/>
    </header>
  );
}
