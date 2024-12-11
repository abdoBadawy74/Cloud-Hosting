import { FaEdit, FaTrash } from "react-icons/fa";

const CommentItem = () => {
  return (
    <div className="mb-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300 ">
      <div className="flex items-center justify-between mb-2">
        <strong className="text-gray-800 uppercase">Yousef</strong>
        <span className="bg-yellow-700 px-1 rounded-lg text-white">
          1/1/2022
        </span>
      </div>
      <p className="text-gray-900 mb-2">thanks for sharing this information</p>
      <p className="flex justify-end items-center">
        <FaEdit className="text-green-700 cursor-pointer" />
        <FaTrash className="text-red-700 cursor-pointer ml-3" />
      </p>
    </div>
  );
};

export default CommentItem;
