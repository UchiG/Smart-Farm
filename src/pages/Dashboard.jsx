import Sidebar from "../components/Sidebar"
import Users from "../components/Users"

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex">
        <Sidebar />
        <Users />
      </div>
    </div>
  )
}

export default Dashboard
