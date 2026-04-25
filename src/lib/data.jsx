export async function getCategories() {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories',
    {
      cache: 'no-store',
    },
  );

  const data = await res.json();
  return data.data;
}

export async function getNewsCategory(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
    {
      cache: 'no-store',
    },
  );

  const data = await res.json();
  return data.data;
}

export async function getNewsDetailsById(news_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
    { cache: 'no-store' },
  );

  const data = await res.json();
  return data.data[0];
}
