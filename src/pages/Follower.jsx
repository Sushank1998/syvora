import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followerRemove } from "../features/followingSlice"; 
import axios from "axios"; // Import axios

function Follower() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [followers, setFollowers] = useState([]); // State to hold followers data
  const [userID] = useState(user.user_id);

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
        </div>
      )}
    </div>
  );
}

export default Follower;
