'use client';

import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import { Eye, Star, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NewsCard = ({ newsApi }) => {
  const formattedDate = newsApi?.author?.published_date
    ? new Date(newsApi.author.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'Unknown Date';

  return (
    <article className="group w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 mb-5">
      <div className="flex flex-col sm:flex-row">
        {/* Thumbnail */}
        <div className="relative w-full sm:w-64 lg:w-72 h-52 sm:h-auto flex-shrink-0 overflow-hidden">
          <Image
            src={
              newsApi?.thumbnail_url || newsApi?.image_url || '/fallback.jpg'
            }
            alt={newsApi?.title || 'News thumbnail'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Trending badge over image */}
          {newsApi?.others_info?.is_trending && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 bg-rose-600 text-white text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full shadow">
                <TrendingUp size={11} />
                TRENDING
              </span>
            </div>
          )}
          {/* Category tag */}
          {newsApi?.category && (
            <div className="absolute bottom-3 left-3">
              <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                {newsApi.category}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Author row */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-zinc-100 dark:ring-zinc-700 flex-shrink-0">
              <Image
                src={newsApi?.author?.img || '/user.png'}
                alt={newsApi?.author?.name || 'Author'}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 truncate">
                {newsApi?.author?.name || 'Unknown Author'}
              </p>
              <div className="flex items-center gap-1 text-zinc-400 dark:text-zinc-500">
                <Clock size={11} />
                <span className="text-[11px]">{formattedDate}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-[15px] sm:text-base font-bold text-zinc-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {newsApi?.title}
          </h2>

          {/* Description */}
          <p className="text-[13px] text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed flex-1">
            {newsApi?.details}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800 mt-auto">
            {/* Stats */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500">
                <Eye size={13} />
                <span className="text-xs font-medium">
                  {(newsApi?.total_view ?? 0).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-500">
                <Star size={13} fill="currentColor" />
                <span className="text-xs font-semibold">
                  {newsApi?.rating?.number?.toFixed(1) ?? '0.0'}
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/news/${newsApi._id}`}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
