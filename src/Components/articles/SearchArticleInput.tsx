"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
const SearchArticleInput = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchText);
    router.push(`/articles/search?search=${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="my-5 w-full md:w-2/3 m-auto">
      <input
        className="w-full p-3 rounded border-none text-gray-900 text-xl"
        type="search"
        placeholder="Search for articles"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchArticleInput;
