import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardTwo } from '../Card/CardTwo'; // Ensure this component is set up to receive and display blog data

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs'); // Adjust URL if needed
        setBlogs(response.data);
      } catch (error) {
        setError('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='w-[90%] flex gap-4 m-auto mt-10'>
      {blogs.map((blog) => (
        <CardTwo key={blog._id} blog={blog} /> // Pass blog data as props to CardTwo
      ))}
    </div>
  );
}

export default Home;
