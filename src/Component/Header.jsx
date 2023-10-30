import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <div className="flex item-center space-x-5">
        <DarkModeSwitch />
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
