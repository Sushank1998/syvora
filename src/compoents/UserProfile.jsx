import { useSelector } from "react-redux";

function UserProfile() {
  const followers = useSelector((state) => state.searchName?.follow || []);

  const userProfileSelector = useSelector((state) => state.userProfile.user);
console.log("selecter",userProfileSelector)
// console.log("selecter",selecter.profilePicture)
  // State to handle image error
  return (
<div className="max-w-sm mx-auto bg-gray-900 text-white rounded-2xl shadow-xl p-6 mt-5 sm:mt-10 md:mt-14 transition-all duration-300">

  <div className="flex flex-col items-center">
    <img
      src=""
      alt="Profile"
      className="w-24 h-24 rounded-full object-cover border-4 border-gray-700 shadow-md hover:scale-105 transition-transform duration-300"
    />
    <h1 className="mt-4 text-2xl font-bold tracking-wide text-gray-100">{userProfileSelector?.name || "User"}</h1>
  </div>


  <div className="flex justify-around mt-6 px-4">
    <div className="text-center">
      <p className="text-gray-400 text-sm uppercase">Followers</p>
      <p className="text-2xl font-semibold text-indigo-400">{followers.length}</p>
    </div>
    <div className="text-center">
      <p className="text-gray-400 text-sm uppercase">Following</p>
      <p className="text-2xl font-semibold text-green-400">11</p>
    </div>
  </div>
</div>

  );
}

export default UserProfile;
