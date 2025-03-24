import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followerRemove } from "../features/followingSlice"; 
import axios from "axios";

function Follower() {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.searchName.follow);
    const user = useSelector((state) => state.auth.user);
  
    const [userID] =useState(user.user_id)

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
           <div className="flex items-center gap-3">
                <img
                  src={`https://via.placeholder.com/40`} 
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border border-gray-600"
                />

                <h1 className="font-semibold text-white">{follower.name}</h1> 
              </div>

              <button
                onClick={() => dispatch(followerRemove(follower))} 
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
