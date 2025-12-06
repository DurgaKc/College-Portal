import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Curriculum = () => {
  // Sample curriculum data
  const data = [
    { title: "Course 1", description: "Introduction to the subject" },
    { title: "Course 2", description: "Intermediate concepts" },
    { title: "Course 3", description: "Advanced topics" },
    { title: "Course 4", description: "Project work" },
    { title: "Course 5", description: "Final presentation" },
  ];

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <h1 className="text-center font-bold text-2xl mt-4">Our Curriculum</h1>

      <main className="flex-1 p-6 mx-auto w-full max-w-4xl">
        {currentItems.map((item, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              ⬅ Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Curriculum;
