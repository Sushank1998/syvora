import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { followerRemove } from "../features/followingSlice"; 

function Follower() {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.searchName.follow);

  return (
    <div>
      <h1 className="font-bold text-white text-xl my-5">Followers</h1>

      {followers.length === 0 ? (
        <p className="text-gray-400">No followers yet.</p>
      ) : (
        followers.map((follower, index) => (
          <div
            key={index}
            className="bg-gray-800 h-14 rounded flex justify-between px-2 items-center my-2"
          >
            <h1 className="font-bold text-white">{follower}</h1>
            <button
              onClick={() => dispatch(followerRemove(follower))} 
              className="bg-red-400 rounded px-4 py-1 font-bold text-white hover:bg-red-500"
            >
              Unfollow
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Follower;
