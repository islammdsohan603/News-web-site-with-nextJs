import Link from 'next/link';
import { ChevronRight, LayoutGrid } from 'lucide-react';

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <aside className="w-full sticky top-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-zinc-100 dark:border-zinc-800">
        <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <LayoutGrid size={15} className="text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-sm font-bold text-zinc-900 dark:text-white tracking-wide uppercase">
          Categories
        </h2>
      </div>

      {/* Category list */}
      <nav>
        <ul className="space-y-1">
          {categories?.news_category?.map(category => {
            const isActive = activeId === category.category_id;
            return (
              <li key={category.category_id}>
                <Link
                  href={`/category/${category.category_id}`}
                  className={`group flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-200 dark:shadow-blue-900'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <span>{category.category_name}</span>
                  <ChevronRight
                    size={14}
                    className={`transition-transform ${
                      isActive
                        ? 'opacity-100 translate-x-0.5'
                        : 'opacity-0 group-hover:opacity-60 group-hover:translate-x-0.5'
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
