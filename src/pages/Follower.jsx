<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> ded7e300e8b8a2339aefd91968334f25064dc30a
import { useSelector, useDispatch } from "react-redux";
import { followerRemove } from "../features/followingSlice"; 
import axios from "axios"; // Import axios

function Follower() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const followers = useSelector((state) => state.searchName.follow);
    const user = useSelector((state) => state.auth.user);
  
 
=======
  const user = useSelector((state) => state.auth.user);
  const [followers, setFollowers] = useState([]); // State to hold followers data
  const [userID] = useState(user.user_id);
>>>>>>> ded7e300e8b8a2339aefd91968334f25064dc30a

  // Fetch followers when the component loads
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        // Set the headers for the API request
        const headers = {
          "Content-Type": "application/json",
          authorization: user?.accessToken,
        };

        // Make the API call to get the list of followers
        const response = await axios.get(`http://localhost:5432/api/v1/mefollowing/${userID}`, { headers });

        if (response.status === 200) {
          setFollowers(response.data.data); 
          console.log(response.data.data)// Update followers state with the response data
        } else {
          console.error('Failed to fetch followers');
        }
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    fetchFollowers(); // Call the function to fetch followers
  }, [userID]); // Only run when userID changes

  const handleUnfollow = async (follower) => {
    try {
      // Prepare the request body with dynamic IDs
      const requestBody = {
        following_id: follower.following_id, // Assuming `follower.userId` holds the ID of the user being unfollowed
        follower_id: userID, // This should be dynamically set to the logged-in user's ID (e.g., `user.id`)
      };

      console.log("following ID " + follower.following_id);
      console.log("follower ID " + userID);

      // Set the headers for the API request
      const headers = {
        "Content-Type": "application/json",
        authorization: user?.accessToken,
      };

      // Make the API call to unfollow
      const response = await axios.post('http://localhost:5432/api/v1/unfollowing', requestBody, { headers });

      // If the API call is successful, dispatch the action to remove the follower from the Redux state
      if (response.status === 200) {
        dispatch(followerRemove(follower)); 
        setFollowers(followers.filter(f => f.following_id !== follower.following_id)); // Assuming `followerRemove` handles updating the state
        console.log('Unfollowed successfully');
      } else {
        console.error('Failed to unfollow');
      }
    } catch (error) {
      console.error('Error unfollowing:', error);
    }
  };

  return (
<<<<<<< HEAD
    <div className="p-4 sm:p-5 bg-gray-900 rounded-lg shadow-lg max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-auto mx-auto">
    <h1 className="font-bold text-white text-xl sm:text-2xl mb-4 sm:mb-5 text-center sm:text-left">Followers</h1>
  
    {followers.length === 0 ? (
      <p className="text-gray-400 text-center text-sm sm:text-base">No followers yet.</p>
    ) : (
      <div className="grid gap-3">
        {followers.map((follower, index) => (
        <div
        key={index}
        className="flex flex-wrap sm:flex-nowrap items-center justify-between bg-gray-800 p-2 sm:p-3 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-200"
      >
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={`https://via.placeholder.com/40`} 
            alt="User"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-600"
          />
      
          <h1 className="font-semibold text-white text-sm sm:text-base truncate">
            {follower.name}
          </h1> 
=======
    <div className="p-5 bg-gray-900 rounded-lg shadow-lg max-w-lg mx-auto w-full">
      <h1 className="font-bold text-white text-2xl mb-5 text-center sm:text-left">Followers</h1>

      {followers.length === 0 ? (
        <p className="text-gray-400 text-center">No followers yet.</p>
      ) : (
        <div className="grid gap-3">
          {followers.map((follower, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 p-3 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-200"
            >
              {/* Follower Name */}
              <div className="flex items-center gap-3">
                <img
                  src={`https://via.placeholder.com/40`} // Replace with actual profile image URL
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border border-gray-600"
                />
                <h1 className="font-semibold text-white">{follower.username}</h1> 
              </div>

              {/* Unfollow Button */}
              <button
                onClick={() => handleUnfollow(follower)} // Trigger the API call
                className="bg-red-500 px-4 py-1 text-sm font-bold text-white rounded-md hover:bg-red-600 transition-all duration-200"
              >
                Unfollow
              </button>
            </div>
          ))}
>>>>>>> ded7e300e8b8a2339aefd91968334f25064dc30a
        </div>
      
        <button
          onClick={() => dispatch(followerRemove(follower))} 
          className="bg-red-500 px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold text-white rounded-md hover:bg-red-600 transition-all duration-200"
        >
          Unfollow
        </button>
      </div>
        ))}
      </div>
    )}
  </div>
  
  );
}

export default Follower;
