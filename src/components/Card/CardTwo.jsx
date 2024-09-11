import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CardTwo({ blog }) {
  const navigate = useNavigate();

  const handleRead = () => {
    navigate(`/blog/${blog._id}`);
  };

  return (
    <div className="w-[300px] mt-10 justify-center items-center rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{blog.title}</h1>
        <p className="mt-3 text-sm text-gray-600">
          {blog.content.substring(0, 100)} {/* Show a preview */}
        </p>
        <button
          type="button"
          onClick={handleRead}
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
  );
}
