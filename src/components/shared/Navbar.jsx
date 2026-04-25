import Link from 'next/link';
import Image from 'next/image';

import NavLink from './NavLink';

import users from '@/assets/user.png';

const NavbarPage = () => {
  return (
    <nav className=" w-10/12 mx-auto px-8 sticky top-0 z-50 backdrop-blur-lg bg-black border-b border-white/10 my-8 rounded-md">
      <div className=" flex justify-between items-center py-4">
        <div></div>
        {/* Nav Links */}
        <ul className=" flex items-center gap-8 text-gray-300 font-medium">
          <li>
            <NavLink href="/" className="hover:text-cyan-400 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/aboutus" className="hover:text-cyan-400 transition">
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="/career" className="hover:text-cyan-400 transition">
              Career
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* User Image */}
          <Image
            src={users}
            alt="user"
            width={40}
            height={40}
            className="rounded-full border-2 border-cyan-400"
          />

          {/* Login Button */}
          <button className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;
