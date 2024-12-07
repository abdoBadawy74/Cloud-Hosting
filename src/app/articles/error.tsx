"use client";

import Link from "next/link";
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

function AriclesErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="pt-7 text-center fixed-height">
        <p className="mb-3 text-xl">THis is custom error page for articles page/route </p>
      <div className="text-xl text-red-600 font-semibold">
        some thing went wrong
        <h3 className="text-gray-500 ">Error Message : {error.message}</h3>
      </div>
      <button
        onClick={reset}
        className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg mt-5"
        >
        Try Again
        </button>
      <Link className="text-xl underline text-blue-700 block mt-6" href="/">
        Go back to home page
      </Link>
    </div>
  );
}

export default AriclesErrorPage;
