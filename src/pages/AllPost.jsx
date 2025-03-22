import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import {removePhoto} from "../features/addpostSlice"

function AllPost() {
  const addPhoto = useSelector((state) => state.photo?.item || []);
  const dispatch = useDispatch()

  const handleDelete = (index) => {
    dispatch(removePhoto(index)); // Pass the full object
    console.log("psss")
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-white text-2xl font-bold mb-6 text-center">All Posts</h2>

      {addPhoto.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {addPhoto.map((photo, index) => (
            <div
              key={index}
              className="relative bg-gray-900 p-3 rounded-xl shadow-md transition-all hover:shadow-lg"
            >
              {/* Post Image */}
              <img
                src={photo.image}
                alt="Post"
                className="w-40 h-40 object-cover rounded-lg"
              />

              {/* Post Description */}
              <p className="text-gray-300 text-sm text-center mt-3 font-semibold">
                {photo.description}
              </p>

              {/* Delete Button */}
              <button
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full"
                onClick={() => handleDelete(index)}
              >
                <MdDelete size={20} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg mt-6">No posts available</p>
      )}
    </div>
  );
}

export default AllPost;

