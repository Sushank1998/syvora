import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaComment } from "react-icons/fa";
import { useSelector } from "react-redux";

function Post() {
  const [likedPosts, setLikedPosts] = useState({});

  const selecter = useSelector((state) => state.auth.user);
  console.log("selecter1", selecter);
  const [images, setimages] = useState([])

  const addPhoto = useSelector((state) => state.photo?.item || []);

  console.log("addPhoto=post>>", addPhoto);

  const handleLike = (index) => {
    setLikedPosts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(
        `http://localhost:5432/api/v1/posts`,
        {
          headers: {
            "Content-Type": "application/json",

          },
        }
      );
      console.log("jejjeje res====>", res);
      console.log("jejjeje res====>", res.data.status);
      if (res.status === 200) {
        console.log("jejjeje res====>", res.data.data);
        setimages(res.data.data)

      }
    }
    fetchdata()
  }, []);


  

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4">
      {images.length > 0 ? (
        images.map((photo, index) => (
          <div key={index} className="bg-gray-900 text-white p-6 rounded-xl shadow-lg border border-gray-800">

            <div className="flex items-center gap-4 mb-4">
              <img
                src={"http://localhost:5432" + photo.user.avatar || "https://via.placeholder.com/50"}
                alt="userPhoto"
                className="w-12 h-12 rounded-full border-2 border-gray-500"
              />
              <h3 className="text-lg font-semibold">{photo.user.username}</h3>
            </div>


            <img
              src={"http://localhost:5432" + photo.image}
              alt="Post"
              className="w-full max-h-96 rounded-lg object-cover border border-gray-700 mb-4"
            />


            <p className="text-gray-300 mb-4">{photo.description}</p>


            <div className="flex items-center justify-between">
              <button
                onClick={() => handleLike(index)}
                className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-all"
              >
                {likedPosts[index] ? <FaHeart className="text-red-500" /> : <FaRegHeart />}

              </button>

            </div>



          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No posts available</p>
      )}
    </div>

  );
}

export default Post;
