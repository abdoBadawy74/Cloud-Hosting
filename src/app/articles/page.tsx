import ArticleItem from "@/Components/articles/ArticleItem";
import { Article } from "@/utils/types";
import type { Metadata } from "next";

export default async function ArticlesPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Article[] = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  return (
    <section className="container m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {data.map((item) => (
          <ArticleItem key={item.id} article={item} />
        ))}
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Articles Page",
  description: "Articles Programming page",
};
