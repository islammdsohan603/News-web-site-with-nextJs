'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const patName = usePathname();
  const isActive = patName === href;

  return (
    <Link
      href={href}
      className="relative group px-3 py-1 text-gray-300 hover:text-cyan-400 transition"
    >
      {children}

      <span
        className={`absolute bottom-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
          isActive
            ? 'left-0 w-full'
            : 'left-1/2 w-0 group-hover:left-0 group-hover:w-full'
        }`}
      ></span>
    </Link>
  );
};

export default NavLink;
