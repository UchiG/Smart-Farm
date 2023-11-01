import { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import { Auth } from "../components/auth";
import Sidebar from "../components/Sidebar"
import { useNavigate } from "react-router-dom"
import {
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import Logo from "../assets/svg/logo.svg"

const AddAnimal = () => {
  const navigate = useNavigate();

  const [animalList, setAnimalList] = useState([]);

  const [newAnimalType, setNewAnimalType] = useState("");
  const [newAnimalColor, setNewAnimalColor] = useState("");
  const [newAnimalBreed, setNewAnimalBreed] = useState("");
  const [newAnimalSpecies, setNewAnimalSpecies] = useState("");
  const [newAnimalAge, setNewAnimalAge] = useState("");
  const [newAnimalLocation, setNewAnimalLocation] = useState("");
  const [newAnimalGender, setNewAnimalGender] = useState("");
  const [newAnimalVaccinationStatus, setNewAnimalVaccinationStatus] = useState("");
  const [newAnimalHealthStatus, setNewAnimalHealthStatus] = useState("");
  const [newAnimalDob, setNewAnimalDob] = useState("");

  const [updatedSpecies, setUpdatedSpecies] = useState("");

  const animalsCollectionRef = collection(db, "animals");

  const getAnimalList = async () => {
    try {
      const data = await getDocs(animalsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setAnimalList(filteredData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAnimalList();
  }, []);

  const onSubmitAnimal = async (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    try {
      await addDoc(animalsCollectionRef, {
        type: newAnimalType,
        color: newAnimalColor,
        breed: newAnimalBreed,
        species: newAnimalSpecies,
        age: newAnimalAge,
        location: newAnimalLocation, // Add location
        gender: newAnimalGender, // Add gender
        vaccinationStatus: newAnimalVaccinationStatus, // Add vaccinationStatus
        healthStatus: newAnimalHealthStatus, // Add healthStatus
        dob: newAnimalDob, // Add dob

        userId: auth?.currentUser?.uid,
      });
      // Clear input fields
      setNewAnimalType("");
      setNewAnimalColor("");
      setNewAnimalBreed("");
      setNewAnimalSpecies("");
      setNewAnimalAge("");
      setNewAnimalLocation(""); // Clear location
      setNewAnimalGender(""); // Clear gender
      setNewAnimalVaccinationStatus(""); // Clear vaccinationStatus
      setNewAnimalHealthStatus(""); // Clear healthStatus
      setNewAnimalDob(""); // Clear dob
      getAnimalList();
      navigate("/animals");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div className="logo">
        <img src={Logo} alt="Your Logo" width="500px" />
      </div>
    <div className="flex">
      <Sidebar />
      {/* <Auth /> */}
      <div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Animal type"
            value={newAnimalType}
            onChange={(e) => setNewAnimalType(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Color"
            type="text"
            value={newAnimalColor}
            onChange={(e) => setNewAnimalColor(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Breed"
            type="text"
            value={newAnimalBreed}
            onChange={(e) => setNewAnimalBreed(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Species"
            type="text"
            value={newAnimalSpecies}
            onChange={(e) => setNewAnimalSpecies(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Age"
            type="text"
            value={newAnimalAge}
            onChange={(e) => setNewAnimalAge(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Location" // Add location
            type="text" // Update the input type if needed
            value={newAnimalLocation} // Use the state variable
            onChange={(e) => setNewAnimalLocation(e.target.value)} // Set the state
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Gender" // Add gender
            type="text" // Update the input type if needed
            value={newAnimalGender} // Use the state variable
            onChange={(e) => setNewAnimalGender(e.target.value)} // Set the state
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Vaccination Status" // Add vaccinationStatus
            type="text" // Update the input type if needed
            value={newAnimalVaccinationStatus} // Use the state variable
            onChange={(e) => setNewAnimalVaccinationStatus(e.target.value)} // Set the state
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Health Status" // Add healthStatus
            type="text" // Update the input type if needed
            value={newAnimalHealthStatus} // Use the state variable
            onChange={(e) => setNewAnimalHealthStatus(e.target.value)} // Set the state
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Date of Birth" // Add dob
            type="text" // Update the input type if needed
            value={newAnimalDob} // Use the state variable
            onChange={(e) => setNewAnimalDob(e.target.value)} // Set the state
          />
        </div>
        <button
          className="p-2 bg-green-700 text-white rounded hover-bg-green-800"
          onClick={onSubmitAnimal}
        >
          Add Animal
        </button>
      </div>
    </div>
    </>
  );
}

export default AddAnimal;
