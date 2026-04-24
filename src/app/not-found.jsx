'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

const NotFoundPages = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold text-cyan-400 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

        {/* Description */}
        <p className="mt-3 text-gray-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Illustration Emoji */}
        <div className="text-6xl mt-6 animate-bounce">🚧</div>

        {/* Button */}
        <div className="mt-8">
          <Link href="/">
            <Button
              className="px-6 py-2 bg-blue-400  font-semibold text-2xl text-white"
              color="primary"
              variant="solid"
            >
              Go Back Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPages;
