'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';

import userAvatar from '@/assets/user.png';

import { authClient, useSession } from '@/lib/auth-client';

const NavbarPage = () => {
  const { data: session, isPending } = useSession();

  const user = session?.user;

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
        {isPending ? (
          <p className="text-center text-sm font-semibold mt-6">
            Loading Data...
          </p>
        ) : user ? (
          <div className="flex items-center gap-4">
            {/* User Image */}
            <h1> {user.name} </h1>
            <Image
              src={user.image || userAvatar}
              alt="user"
              width={40}
              height={40}
              className="rounded-full border-2 border-cyan-400"
            />

            {/* Login Button */}
            <Link
              onClick={async () => await authClient.signOut()}
              href={`/`}
              className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              LogOut
            </Link>
          </div>
        ) : (
          <div className=" flex items-center gap-6">
            {/* Registor */}

            <Link
              href={`/register`}
              className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              SignUp
            </Link>

            {/* Login Button */}
            <Link
              href={`/login`}
              className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarPage;
