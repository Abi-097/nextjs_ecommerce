import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost btn-circle text-lg">
            <Image src="/alexi.png" alt="alexi.png" height={24} width={24} />
          </Link>
          <ul className="flex">
            <li>
              <Link className="btn btn-ghost btn-circle" href="/cart">
                <Image
                  src="/carts.png"
                  alt="carts.png"
                  height={24}
                  width={24}
                />
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost btn-circle" href="/signin">
                <Image
                  src="/profile.png"
                  alt="profile.png"
                  height={24}
                  width={24}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

//btn-ghost <-d.ui
