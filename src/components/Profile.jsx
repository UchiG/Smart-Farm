import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Logo from "../assets/svg/logo.svg"
import Settings from "../components/Settings"


function Profile() {
  // Define state variables for each input field
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [cellphone, setCellphone] = useState("")
  const [country, setCountry] = useState("")

  // Define a list of countries for the dropdown
  const countries = ["USA", "Canada", "UK", "Australia", "South Africa", "Zimbabwe", "Botswana", "Other"]

  // Event handlers to update state when input values change
  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleCellphoneChange = (e) => {
    setCellphone(e.target.value)
  }

  const handleCountryChange = (e) => {
    setCountry(e.target.value)
  }

  // Handle form submission (you can add your own logic here)
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your logic to save the user's profile data
    console.log("User Profile Data:", {
      userName,
      email,
      cellphone,
      country,
    })
  }

  return (
    <>
    <Settings />
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              User Name:
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
              required
              className="mt-1 p-2 border rounded-md w-full max-w-xs focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="mt-1 p-2 border rounded-md w-full max-w-xs focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="cellphone"
              className="block text-sm font-medium text-gray-700"
            >
              Cellphone No:
            </label>
            <input
              type="tel"
              id="cellphone"
              value={cellphone}
              onChange={handleCellphoneChange}
              required
              className="mt-1 p-2 border rounded-md w-full max-w-xs focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country:
            </label>
            <select
              id="country"
              value={country}
              onChange={handleCountryChange}
              required
              className="mt-1 p-2 border rounded-md w-full max-w-xs focus:ring focus:ring-blue-300"
            >
              <option value="">Select a country</option>
              {countries.map((countryName) => (
                <option key={countryName} value={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Profile
