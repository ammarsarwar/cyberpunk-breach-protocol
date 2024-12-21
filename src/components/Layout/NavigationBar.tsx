// components/NavigationBar.tsx
import Link from "next/link";
import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <nav className=" text-[#CEEC5F] p-4 sticky top-0 z-50">
      <ul className="flex justify-between px-10">
        <Link href="/">
          <li>Buffer Crack</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          {" "}
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
