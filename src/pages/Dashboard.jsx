import Sidebar from "../components/Sidebar";
import Users from "../components/Users";
import Stats from "../components/Stats";
import Logo from "../assets/svg/logo.svg";
import Map from "../widgets/Map";
import Weather from "../widgets/Weather";
import TopNavigation from "../components/TopNavigation";

const Dashboard = () => {
  return (
    <>
      <TopNavigation />
      <div className="flex">
        <Sidebar />

        <div className="container mx-auto p-4 flex-1">
          <div className="flex space-x-4">
            <Map />
            <Weather />
            <div className="w-1/4"></div>
            <div className="w-3/4">
              <Stats />
            </div>
          </div>
          <Users />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
