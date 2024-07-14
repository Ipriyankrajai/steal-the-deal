import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="px-5 py-[10px] max-w-screen-xl m-auto">
      <nav>
        <Link
          href={"/"}
          className="font-lex font-medium text-[20px] sm:text-[28px]"
        >
          StealThe<span className="text-red-600">Deal</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
