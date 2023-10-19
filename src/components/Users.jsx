import { useState, useEffect } from "react"
import { db } from "../config/firebase"
import { getDocs, collection } from "firebase/firestore"

const Users = () => {
  const [userList, setUserList] = useState([])
  const [userCount, setUserCount] = useState(0) // Initialize user count

  const usersCollectionRef = collection(db, "users")

  const getUserList = async () => {
    try {
      const data = await getDocs(usersCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setUserList(filteredData)
      setUserCount(filteredData.length) // Update user count
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUserList()
  }, [])

  const getStatusCellStyle = (status) => {
    if (status === "active") {
      return "bg-green-200 text-green-700 rounded-full"
    } else if (status === "inactive") {
      return "bg-red-200 text-red-700 rounded-full"
    }
    // You can add additional conditions if needed
  }

  return (
    <div className="flex">
      <div className="container mx-auto py-4">
      <h1 className="text-2xl font-semibold mb-4 flex items-center">
          Team Members
          <span className="bg-green-200 text-green-700 px-1 py-1 ml-2 rounded-full text-sm">
            {userCount} users
          </span>
        </h1>
        <div className="mt-2">
          <table className="w-full md:w-2/3 border-collapse border border-gray-300 table-space-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border border-gray-300">Name</th>
                <th className="p-2 border border-gray-300">Role</th>
                <th className="p-2 border border-gray-300">Status</th>
                <th className="p-2 border border-gray-300">Email</th>
                <th className="p-2 border border-gray-300">Teams</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td className="p-2 border border-gray-300">{user.Name}</td>
                  <td className="p-2 border border-gray-300">{user.Role}</td>
                  <td
                    className={`p-2 border border-gray-300 ${getStatusCellStyle(
                      user.Status
                    )}`}
                  >
                    {user.Status}
                  </td>
                  <td className="p-2 border border-gray-300">{user.Email}</td>
                  <td className="p-2 border border-gray-300">{user.Teams}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users
