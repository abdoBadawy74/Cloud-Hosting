"use client";
import { useState } from "react";
import { toast } from "react-toastify";
const AddArticleForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(title, description);
    if (title === "") return toast.error("Title is required");
    if (description === "") return toast.error("Description is required");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="text"
        placeholder="Enter Article title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-4 border rounded p-2 text-xl"
        placeholder="Enter Article description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className="text-2xl text-white bg-blue-700 hover:bg-blue-900 rounded p-2 w-full"
      >
        Add
      </button>
    </form>
  );
};

export default AddArticleForm;
