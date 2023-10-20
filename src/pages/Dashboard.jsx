import Sidebar from "../components/Sidebar"
import Users from "../components/Users"
import Logo from "../assets/svg/logo.svg"

const Dashboard = () => {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="Your Logo" width="500px" />
      </div>
      <div className="">
        <div className="flex">
          <Sidebar />
          <Users />
        </div>
      </div>
    </>
  )
}

export default Dashboard
