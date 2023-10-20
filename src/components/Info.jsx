import Sidebar from "../components/Sidebar"
import { auth } from "../config/firebase"

function Info() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">User Info</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Name:
            </label>
            <p className="mt-1 text-lg">{auth?.currentUser?.displayName}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address:
            </label>
            <p className="mt-1 text-lg">{auth?.currentUser?.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture:
            </label>
            <div className="mt-1">
              {auth?.currentUser?.photoURL ? (
                <img
                  src={auth?.currentUser.photoURL}
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
              ) : (
                <p>No profile picture available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
