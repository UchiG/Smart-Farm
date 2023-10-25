import SettingsIcon from "../assets/svg/settingsIcon.svg?react"
import DashboardIcon from "../assets/svg/dashboardIcon.svg?react"
import AnimalIcon from "../assets/svg/animalIcon.svg?react"
import CropIcon from "../assets/svg/cropIcon.svg?react"
import InventoryIcon from "../assets/svg/inventoryIcon.svg?react"
import LogoutIcon from "../assets/svg/logoutIcon.svg?react"
import { Link, useLocation } from "react-router-dom"
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"
import { toast } from "react-toastify"

const Sidebar = () => {
  const location = useLocation()

  const logOut = async () => {
    try {
      await signOut(auth)
      toast.success("Logged out successfully!")
    } catch (err) {
      console.error(err)
      toast.error("Failed to log out!")
    }
  }

  return (
    <div className="sidebar bg-black w-1/5 h-screen text-white p-4 flex flex-col justify-between">
      <ul>
        <li className="mb-4">
          <Link
            to="/dashboard"
            className={`${
              location.pathname === "/dashboard"
                ? "bg-green-600 text-white flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
                : "flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
            }`}
          >
            <DashboardIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Dashboard</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/animals"
            className={`${
              location.pathname === "/animals"
                ? "bg-green-600 text-white flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
                : "flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
            }`}
          >
            <AnimalIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Animals</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/crops"
            className={`${
              location.pathname === "/crops"
                ? "bg-green-600 text-white flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
                : "flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
            }`}
          >
            <CropIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Crops</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/inventory"
            className={`${
              location.pathname === "/inventory"
                ? "bg-green-600 text-white flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
                : "flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
            }`}
          >
            <InventoryIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Inventory</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/settings"
            className={`${
              location.pathname === "/settings"
                ? "bg-green-600 text-white flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
                : "flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
            }`}
          >
            <SettingsIcon fill="#ffffff" width="20px" height="20px" />
            <span className="ml-2">Settings</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link
          onClick={logOut}
          to="/logout"
          className={`${
            location.pathname === "/logout"
              ? "bg-green-600 text-white flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
              : "flex items-center space-x-2 rounded hover:bg-gray-700 p-2"
          }`}
        >
          <LogoutIcon fill="#ffffff" width="20px" height="20px" />
          <span className="ml-2">Logout</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
