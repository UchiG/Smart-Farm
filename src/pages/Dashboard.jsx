import Sidebar from "../components/Sidebar";
import Users from "../components/Users";
import Stats from "../components/Stats";
import Logo from "../assets/svg/logo.svg";

const Dashboard = () => {
  return (
    <>
    <div className="logo">
        <img src={Logo} alt="Your Logo" width="500px" />
      </div>
    <div className="flex">
      <Sidebar />

      <div className="container mx-auto p-4 flex-1">
        <div className="flex space-x-4">
          <div className="w-1/4">
          </div>
          <div className="w-3/4">
            <Stats />
            <Users />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Dashboard;




