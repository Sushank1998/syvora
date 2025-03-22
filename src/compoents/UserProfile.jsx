import { useSelector } from "react-redux";

function UserProfile() {
  const followers = useSelector((state) => state.searchName?.follow || []);
  const selecter = useSelector((state) => state.auth.user);
console.log("selecter",selecter)
// console.log("selecter",selecter.profilePicture)
  // State to handle image error
  return (
    <div className="text-center text-white mt-5 border p-4 border-gray-300">
      <div className="flex justify-between px-13 items-center">
        <img
          src={
            selecter?.profilePicture
              ? selecter.profilePicture
              : "https://via.placeholder.com/50"
          }
          alt="Profile"
          className="w-10 h-10 rounded-full border object-cover"
        />
        <h1 className="font-bold text-xl">{selecter?.name || "User"}</h1>
      </div>

      <div className="flex justify-between px-10 mt-5 font-bold">
        <div>
          <div>Followers</div>
          <div>{followers.length}</div>
        </div>
        <div>
          <div>Following</div>
          <div>{followers.length}</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
