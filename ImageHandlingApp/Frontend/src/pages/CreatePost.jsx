import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // ✅ FIXED

    try {
      const response = await axios.post(
        "http://localhost:3000/posts",
        formData).then((res) => {
         navigate('/posts');
        }).catch((err) => {
          console.error("Error creating post", err);
        });
       


     
    }
  };

  return (
    <div className="bg-white mt-40 p-8 rounded-lg shadow-md w-1/3 mx-auto">
      <h1 className="text-xl font-semibold text-slate-600">
        Create a New Post
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col py-5 gap-4">
        <input
          className="border border-gray-300 p-2 rounded"
          type="file"
          name="image"
          required
        />

        <input
          className="border border-gray-300 p-2 rounded"
          type="text"
          name="caption"
          placeholder="Enter caption"
          required
        />

        <button onClick={() => navigate('/posts')}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
