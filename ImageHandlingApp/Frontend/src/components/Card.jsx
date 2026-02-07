import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((response) => {
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading posts...</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {posts.length > 0 ? (
        posts.map((item) => (
          <div key={item._id} className="bg-white p-4 rounded-lg shadow-md w-64">
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="mt-2 text-gray-600">{item.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Card;
