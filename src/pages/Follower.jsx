import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followerRemove } from "../features/followingSlice"; 
import axios from "axios";

function Follower() {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.searchName.follow);
    const user = useSelector((state) => state.auth.user);
  
 

  useEffect(()=>{
    const fetch = async () => {
      const res = await axios.post("http://localhost:5432/api/v1/unfollowing",{
        headers: {
          "Content-Type": "application/json",
          authorization: user?.accessToken,
        },
      }
    )
    console.log("res=====>", res.data);
    }
    fetch()
  })

  return (
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
