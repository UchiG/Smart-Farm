import Users from "./Users"
import Logo from "../assets/svg/logo.svg"
// import Settings from "./Settings"


const Team = () => {
  return (
    <>
    <div className="logo">
      <img src={Logo} alt="Your Logo" width="500px" />
    </div>
    {/* <Settings /> */}
    <div>
      <Users></Users>
    </div>
    </>
  )
}

export default Team
