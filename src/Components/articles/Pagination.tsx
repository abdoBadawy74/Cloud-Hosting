const pages = [1, 2, 3, 4, 5, 6];

const Pagination = () => {
  return (
    <div className="flex items-center justify-center mt-2 mb-10">
      <button className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-400 hover:border-gray-500 transition flex items-center justify-center mx-1">
        prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-400 hover:border-gray-500 transition flex items-center justify-center mx-1"
        >
          {page}
        </button>
      ))}
      <button className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-400 hover:border-gray-500 transition flex items-center justify-center mx-1">
        next
      </button>
    </div>
  );
};

export default Pagination;
