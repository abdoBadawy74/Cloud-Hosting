import ArticleItem from "@/Components/articles/ArticleItem";
import Pagination from "@/Components/articles/Pagination";
import SearchArticleInput from "@/Components/articles/SearchArticleInput";
import { Article } from "@/utils/types";
import type { Metadata } from "next";

export default async function ArticlesPage() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate slow network
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Article[] = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  return (
    <section className="container m-auto px-5 fixed-height">
      <SearchArticleInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {data.slice(0, 6).map((item) => (
          <ArticleItem key={item.id} article={item} />
        ))}
      </div>
      <Pagination />
    </section>
  );
}

export const metadata: Metadata = {
  title: "Articles Page",
  description: "Articles Programming page",
};
