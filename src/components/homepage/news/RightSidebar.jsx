'use client';

import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Mail, Shield } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

const RightSidebar = () => {
  const handleGoogleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  };

  return (
    <aside className="w-full sticky top-4 space-y-4">
      {/* Login card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-5 shadow-sm">
        <div className="mb-5">
          <h2 className="text-sm font-bold text-zinc-900 dark:text-white tracking-wide uppercase mb-1">
            Sign In
          </h2>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            Access personalized news & bookmarks
          </p>
        </div>

        {/* Social buttons */}
        <div className="flex flex-col gap-3">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-900/20 dark:hover:border-blue-800 transition-all text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-blue-400"
          >
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaFacebook className="text-white text-sm" />
            </div>
            Continue with Facebook
          </motion.button>

          <motion.button
            onClick={handleGoogleSignUp}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 hover:bg-red-50 hover:border-red-200 dark:hover:bg-red-900/20 dark:hover:border-red-800 transition-all text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400"
          >
            <div className="w-7 h-7 bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaGoogle className="text-red-500 text-sm" />
            </div>
            Continue with Google
          </motion.button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
          <span className="text-xs text-zinc-400 font-medium">OR</span>
          <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
        </div>

        {/* Email button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-blue-200 dark:shadow-blue-900"
        >
          <Mail size={14} />
          Sign in with Email
        </motion.button>

        {/* Privacy note */}
        <p className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 dark:text-zinc-500 mt-4">
          <Shield size={11} />
          We never share your data with third parties
        </p>
      </div>

      {/* Newsletter mini-card */}
      <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-white">
        <h3 className="text-sm font-bold mb-1">Daily Digest</h3>
        <p className="text-xs text-blue-100 mb-4 leading-relaxed">
          Top stories delivered to your inbox every morning.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-3 py-2 rounded-xl bg-white/15 border border-white/25 placeholder-blue-200 text-white text-xs outline-none focus:bg-white/20 transition mb-2"
        />
        <button className="w-full py-2 rounded-xl bg-white text-blue-700 text-xs font-bold hover:bg-blue-50 transition">
          Subscribe Free
        </button>
      </div>
    </aside>
  );
};

export default RightSidebar;
