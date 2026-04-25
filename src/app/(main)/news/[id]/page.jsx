import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Star, Clock, TrendingUp, ArrowLeft, User } from 'lucide-react';

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return {
    title: news.title,
    desc: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <div className="text-center">
          <p className="text-6xl mb-4">📰</p>
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
            News not found
          </h1>
          <Link
            href="/"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            ← Go Home
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = news?.author?.published_date
    ? new Date(news.author.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Unknown Date';

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero Image Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">
        <Image
          src={news?.image_url || news?.thumbnail_url || '/fallback.jpg'}
          alt={news?.title || 'News image'}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        {/* Back button */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={15} />
            Back
          </Link>
        </div>

        {/* Badges on image */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col gap-2 items-end">
          {news?.others_info?.is_trending && (
            <span className="inline-flex items-center gap-1.5 bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <TrendingUp size={12} />
              TRENDING
            </span>
          )}
          {news?.others_info?.is_todays_pick && (
            <span className="inline-flex items-center gap-1.5 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              ⭐ TODAY PICK
            </span>
          )}
        </div>

        {/* Category on image bottom */}
        {news?.category_id && (
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Category #{news.category_id}
            </span>
          </div>
        )}
      </div>

      {/* Content Card */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-16">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden">
          {/* Stats bar */}
          <div className="flex items-center gap-6 px-6 sm:px-8 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
              <Eye size={15} />
              <span className="text-sm font-medium">
                {(news?.total_view ?? 0).toLocaleString()} views
              </span>
            </div>
            <div className="flex items-center gap-2 text-amber-500">
              <Star size={15} fill="currentColor" />
              <span className="text-sm font-semibold">
                {news?.rating?.number?.toFixed(1) ?? '0.0'}
              </span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                ({news?.rating?.badge})
              </span>
            </div>
          </div>

          {/* Main content */}
          <div className="px-6 sm:px-8 py-7">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-6">
              {news?.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center gap-4 mb-7 pb-7 border-b border-zinc-100 dark:border-zinc-800">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-700 flex-shrink-0">
                {news?.author?.img ? (
                  <Image
                    src={news.author.img}
                    alt={news?.author?.name || 'Author'}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                    <User size={20} className="text-zinc-400" />
                  </div>
                )}
              </div>
              <div>
                <p className="text-base font-bold text-zinc-800 dark:text-zinc-100">
                  {news?.author?.name || 'Unknown Author'}
                </p>
                <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 mt-0.5">
                  <Clock size={12} />
                  <span className="text-xs">{formattedDate}</span>
                </div>
              </div>
            </div>

            {/* Details text */}
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
                {news?.details || 'No details available.'}
              </p>
            </div>

            {/* See All button */}
            <div className="mt-10 pt-7 border-t border-zinc-100 dark:border-zinc-800">
              <Link
                href={`/category/${news.category_id}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-150 shadow-sm hover:shadow-md"
              >
                See All in This Category
                <ArrowLeft size={15} className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
