import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/authSlice"; 
import { MdHomeFilled } from "react-icons/md";
import { FaGrinBeam } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsFillPostageHeartFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/"); 
  };

  const sidebar = [
    { path: "/", icon: <MdHomeFilled />, title: "Main" },
    { path: "/profile", icon: <FaGrinBeam />, title: "Profile" },
    { path: "/notifications", icon: <IoNotifications />, title: "Notifications" },
    { path: "/allpost", icon: <BsFillPostageHeartFill />, title: "AllPost" },
  ];

  return (
    <div className="w-1/2 hidden sm:block">
      <div className="flex flex-col text-white text-xl font-bold text-center">
        {sidebar.map((item) => (
          <div
            key={item.path}
            className={`flex justify-start gap-5 px-10 items-center cursor-pointer py-4 ${
              location.pathname === item.path ? "text-yellow-400 rounded-lg" : ""
            }`}
          >
            <Link
              to={item.path}
              className="flex justify-start gap-5 px-5 items-center cursor-pointer py-4 w-full"
            >
              <div>{item.icon}</div>
              <div>
                <h2>{item.title}</h2>
              </div>
            </Link>
          </div>
        ))}

        {/* Logout Button */}
        <div
          onClick={handleLogout}
          className="flex justify-start gap-5 px-10 items-center cursor-pointer py-4 text-red-500 hover:text-red-700"
        >
          <RiLogoutCircleRLine size={20} className="text-white"/>
          <h2>Logout</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
