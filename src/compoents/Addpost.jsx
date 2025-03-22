import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addphoto } from "../features/addpostSlice";

function Addpost({ setAdd }) {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    
    const dispatch = useDispatch(); // Add useDispatch
    const addPhoto = useSelector(state => state.photo?.item || []);  
    console.log("addPhoto>>", addPhoto);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !image) {
            alert("Please add a description and image.");
            return;
        }

        dispatch(addphoto({ description, image }));

        setAdd(false);
        setDescription(""); 
        setImage(null);
    };

    return (
        <div className="w-full max-w-lg p-6 rounded-2xl shadow-lg text-white">
            <h2 className="text-2xl font-bold text-center mb-6">Add New Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <textarea
                        placeholder="Enter post description"
                        className="w-full px-4 py-2 mt-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows="3"
                    />
                </div>

                <div>
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full px-4 py-2 mt-2 rounded-lg cursor-pointer file:bg-indigo-600 file:border-0 file:px-4 file:py-2 file:rounded-lg file:text-white file:hover:bg-indigo-700"
                        onChange={handleImageChange}
                    />
                    {image && (
                        <div className="mt-4 flex justify-center">
                            <img src={image} alt="Preview" className="w-32 h-32 rounded-lg object-cover border border-gray-500" />
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    Post
                </button>
            </form>
        </div>
    );
}

export default Addpost;
