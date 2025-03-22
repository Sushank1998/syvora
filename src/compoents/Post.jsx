import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaComment } from "react-icons/fa";
import { useSelector } from "react-redux";

function Post() {
  const [likedPosts, setLikedPosts] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});

  const selecter = useSelector((state) => state.auth.user);
  console.log("selecter1", selecter);

  const addPhoto = useSelector((state) => state.photo?.item || []);

  console.log("addPhoto=post>>", addPhoto);

  const handleLike = (index) => {
    setLikedPosts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleCommentSubmit = (e, index) => {
    e.preventDefault();
    if (newComment[index]?.trim() !== "") {
      setComments((prev) => ({
        ...prev,
        [index]: [...(prev[index] || []), newComment[index]],
      }));
      setNewComment((prev) => ({
        ...prev,
        [index]: "",
      }));
    }
  };

  return (
    <div className=" mx-auto space-y-6">
      {addPhoto.length > 0 ? (
        addPhoto.map((photo, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={selecter.profilePicture || "https://via.placeholder.com/50"}
                alt="userPhoto"
                className="w-10 h-10 rounded-full border-2 border-gray-500"
              />
              <h3 className="text-lg font-semibold">{selecter.name}</h3>
            </div>

            <img
              src={photo.image}
              alt="Post"
              className="w-96 rounded-lg mb-4 object-cover"
            />
            <p className="text-gray-300 mb-4">{photo.description}</p>

            <div className="flex items-center justify-between">
              <button
                onClick={() => handleLike(index)}
                className="flex items-center gap-2 text-gray-400 hover:text-red-500"
              >
                {likedPosts[index] ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
                <span>{likedPosts[index] ? 1 : 0} Likes</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-indigo-400">
                <FaComment />
                <span>{comments[index]?.length || 0} Comments</span>
              </button>
            </div>

            <div className="mt-4">
              <form
                onSubmit={(e) => handleCommentSubmit(e, index)}
                className="flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newComment[index] || ""}
                  onChange={(e) =>
                    setNewComment((prev) => ({
                      ...prev,
                      [index]: e.target.value,
                    }))
                  }
                />
                <button
                  type="submit"
                  className="bg-indigo-600 px-4 py-2 cursor-pointer rounded-lg text-white hover:bg-indigo-700"
                >
                  Post
                </button>
              </form>

              {comments[index]?.length > 0 && (
                <div className="mt-4">
                  {comments[index].map((comment, commentIndex) => (
                    <div
                      key={commentIndex}
                      className="bg-gray-700 p-2 rounded-lg mt-2 text-gray-200"
                    >
                      {comment}
                    </div>
                  ))}
                </div>
              )}
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
