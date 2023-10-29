import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <div>
        <Link href="/">
          <h2 className="text-2xl">
            <span className="bold bg-amber-500 py-1 px-2 rounded-lg font-bold">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline mr-1">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
