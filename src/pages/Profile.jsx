import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../features/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user?.name || "");
  const [newEmail, setNewEmail] = useState(user?.email || "");
  const [newPassword, setNewPassword] = useState("");
  const [newProfilePicture, setNewProfilePicture] = useState(user?.profilePicture || "");

  const handleSave = () => {
    const updatedUser = {
      name: newName,
      email: newEmail,
      password: newPassword || user.password,
      profilePicture: newProfilePicture || user.profilePicture,
    };

    dispatch(userData(updatedUser)); 
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src={newProfilePicture || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-2"
          />
        )}
        <h2 className="text-xl font-semibold mt-4">{user?.name}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      {isEditing ? (
        <div className="mt-4">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
            placeholder="Enter new name"
          />
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
            placeholder="Enter new email"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
            placeholder="Enter new password"
          />
          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Save
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="w-full bg-gray-700 text-white py-2 rounded-md mt-4"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}

export default Profile;
