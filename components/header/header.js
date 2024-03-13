import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-circle text-lg">
            <Image src="/alexi.png" alt="alexi.png" height={24} width={24} />
          </Link>
          <ui className="flex">
            <li>
              <Link className="btn btn-ghost" href="/cart">
                Cart
              </Link>
            </li>
          </ui>
        </div>
      </nav>
    </header>
  );
};

export default Header;

//btn-ghost <-d.ui
