import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function BlogDetail() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`); // Adjust URL if needed
        setBlog(response.data);
      } catch (error) {
        setError('Failed to fetch blog details');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>No blog found</p>;

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <button
        type="button"
        onClick={() => navigate('/')} // Go back to the list view
        className="mb-4 rounded-sm bg-blue-500 px-3 py-1 text-white font-semibold shadow-sm hover:bg-blue-600"
      >
        Back
      </button>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Blog"
        className="mt-4 h-[400px] w-full rounded-md object-cover"
      />
      <p className="mt-4 text-lg text-gray-700">{blog.content}</p>
      <p className="mt-4 text-sm text-gray-500">Author: {blog.author.name}</p>
    </div>
  );
}
