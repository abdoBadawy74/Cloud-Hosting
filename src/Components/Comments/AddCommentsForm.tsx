"use client";
import { useState } from "react";
import { toast } from "react-toastify";
const AddCommentForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) {
      return toast.error("Please enter a comment");
    }
    console.log(text);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-7">
      <input
        className="w-full p-2 rounded-lg bg-white text-gray-600 text-xl"
        type="text"
        placeholder="Add a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-800 text-white p-1 rounded-lg mt-2 hover:bg-green-900 transition-all"
      >
        Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
