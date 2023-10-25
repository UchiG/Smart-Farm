import { Link, useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"

const Settings = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="container mx-auto py-4">
          <div className="text-green-500 text-xl font-semibold mb-2">
            Settings
          </div>
          <div className="flex items-center space-x-10">
            <Link
              to="/settings/profile"
              className={`${
                location.pathname === "/settings/profile"
                  ? "text-green-500"
                  : "text-black"
              }`}
            >
              Profile
            </Link>
            <Link
              to="/settings/new-password"
              className={`${
                location.pathname === "/settings/new-password"
                  ? "text-green-500"
                  : "text-black"
              }`}
            >
              Password
            </Link>
            <Link
              to="/settings/team"
              className={`${
                location.pathname === "/settings/team"
                  ? "text-green-500"
                  : "text-black"
              }`}
            >
              Team
            </Link>
            <Link
              to="/settings/info"
              className={`${
                location.pathname === "/settings/info"
                  ? "text-green-500"
                  : "text-black"
              }`}
            >
              Info
            </Link>
          </div>
          <div className="w-1/2 ml-1 border-b-2 border-black"></div>

          {/* Rest of your Settings component */}
        </div>
      </div>
    </>
  )
}

export default Settings
