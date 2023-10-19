import SettingsIcon from "../assets/svg/settingsIcon.svg?react"
import DashboardIcon from "../assets/svg/dashboardIcon.svg?react"
import AnimalIcon from "../assets/svg/animalIcon.svg?react";
import CropIcon from "../assets/svg/cropIcon.svg?react"
import InventoryIcon from "../assets/svg/inventoryIcon.svg?react"
import LogoutIcon from "../assets/svg/logoutIcon.svg?react"
import { NavLink } from "react-router-dom"
import { auth, googleProvider } from "../config/firebase"
import {
  signOut,
} from "firebase/auth"
import { toast } from "react-toastify"

const Sidebar = () => {
  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to log out!");
    }
  };

  return (
    <div className="sidebar bg-black w-1/5 h-screen text-white p-4 flex flex-col justify-between">
      <ul>
        <li className="mb-4">
          <NavLink
            to="/dashboard"
            activeClassName="bg-green-600 text-black"
            className="flex items-center space-x-2 rounded"
          >
            <DashboardIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Dashboard</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/animals"
            activeClassName="text-yellow-300"
            className="flex items-center space-x-2"
          >
            <AnimalIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Animals</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/crops"
            activeClassName="text-yellow-300"
            className="flex items-center space-x-2"
          >
            <CropIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Crops</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/inventory"
            activeClassName="text-yellow-300"
            className="flex items-center space-x-2"
          >
            <InventoryIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Inventory</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/settings"
            activeClassName="text-yellow-300"
            className="flex items-center space-x-2"
          >
            <SettingsIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Settings</span>
          </NavLink>
        </li>
      </ul>
      <div>
        <NavLink
          onClick={logOut}
          to="/sign-in"
          className="flex items-center space-x-2 mb-16"
        >
          <LogoutIcon fill="#ffffff" width="20px" height="20px" />
          <span className="ml-2">Logout</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar
