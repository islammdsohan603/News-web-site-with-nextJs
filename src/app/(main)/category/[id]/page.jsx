import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsCategory } from '@/lib/data';
import NewsCard from '@/components/homepage/news/NewsCard';
import { Newspaper } from 'lucide-react';

export default async function CategoryPage({ params }) {
  const { id } = await params;

  const categories = await getCategories();
  const newsApi = await getNewsCategory(id);

  const categoryName =
    categories?.news_category?.find(c => c.category_id === id)?.category_name ||
    'All News';

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl">
              <Newspaper size={18} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                {categoryName}
              </h1>
              <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-0.5">
                {newsApi?.length ?? 0} article{newsApi?.length !== 1 ? 's' : ''}{' '}
                found
              </p>
            </div>
          </div>
          <div className="mt-4 h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
          {/* Left sidebar */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <LeftSidebar categories={categories} activeId={id} />
          </div>

          {/* Center content */}
          <main className="lg:col-span-6 order-1 lg:order-2">
            {newsApi?.length > 0 ? (
              <div>
                {newsApi.map(n => (
                  <NewsCard key={n._id} newsApi={n} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-4">
                  <Newspaper
                    size={28}
                    className="text-zinc-400 dark:text-zinc-500"
                  />
                </div>
                <h3 className="text-base font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                  No articles found
                </h3>
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  There are no news articles in this category yet.
                </p>
              </div>
            )}
          </main>

          {/* Right sidebar */}
          <div className="lg:col-span-3 order-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
