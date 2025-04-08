import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Image Ravi Creations</h1>
      <p className="text-lg text-center max-w-2xl">
        We are a professionally managed organization focused on delivering quality,
        cost-effective solutions with exceptional customer service.
      </p>
      <div className="mt-6">
        <a href="/about" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Home;
