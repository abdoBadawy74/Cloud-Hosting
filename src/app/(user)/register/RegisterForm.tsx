"use client";
import { useState } from "react";
import { toast } from "react-toastify";
const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password, userName);
    if (userName === "") return toast.error("Username is required");
    if (email === "") return toast.error("Email is required");
    if (password === "") return toast.error("Password is required");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="text"
        placeholder="Enter your username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 border rounded p-2 text-xl"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-800 rounded p-2 w-full"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
