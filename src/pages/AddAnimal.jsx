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

const AddAnimal = () => {
  const navigate = useNavigate();

  const [animalList, setAnimalList] = useState([]);

  const [newAnimalType, setNewAnimalType] = useState("");
  const [newAnimalColor, setNewAnimalColor] = useState("");
  const [newAnimalBreed, setNewAnimalBreed] = useState(""); 
  const [newAnimalSpecies, setNewAnimalSpecies] = useState(""); 
  const [newAnimalAge, setNewAnimalAge] = useState(""); 

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
    try {
      await addDoc(animalsCollectionRef, {
        type: newAnimalType,
        color: newAnimalColor,
        breed: newAnimalBreed,
        species: newAnimalSpecies,
        age: newAnimalAge,
        userId: auth?.currentUser?.uid,
      });
      // Clear input fields
      setNewAnimalType("");
      setNewAnimalColor("");
      setNewAnimalBreed("");
      setNewAnimalSpecies("");
      setNewAnimalAge("");
      getAnimalList();
      navigate("/animals")
    } catch (error) {
      console.error(error);
    }
  }

  return (
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
        <button
          className="p-2 bg-green-700 text-white rounded hover:bg-green-800"
          onClick={onSubmitAnimal}
        >
          Add Animal
        </button>
      </div>
      
    </div>
  );
}

export default AddAnimal;
