import React from "react";

function AboutPage() {
  return (
    <div className="fixed-height container m-auto">
      <h1 className="text-3xl font-bold text-gray-800 p-5">About this app</h1>
      <p className="px-5 text-gray-600 text-xl">
        This is a simple app that demonstrates how to use React Router with
        TypeScript. It includes a home page, an about page, and a 404 page.
      </p>
    </div>
  );
}

export default AboutPage;
