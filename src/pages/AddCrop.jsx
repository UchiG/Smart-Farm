import { useState, useEffect } from "react";
import { db, auth } from "../config/firebase";
import { Auth } from "../components/auth";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { getDocs, collection, addDoc } from "firebase/firestore";
import Logo from "../assets/svg/logo.svg";

const AddCrop = () => {
  const navigate = useNavigate();

  const [cropList, setCropList] = useState([]);

  const [newCropType, setNewCropType] = useState("");
  const [newCropNumber, setNewCropNumber] = useState("");
  const [newCropSize, setNewCropSize] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newPlantingMethod, setNewPlantingMethod] = useState("");
  const [newPlantingDate, setNewPlantingDate] = useState("");
  const [newEstimatedHarvestDate, setNewEstimatedHarvestDate] = useState("");
  const [newGrowthStage, setNewGrowthStage] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [newFertilizationDate, setNewFertilizationDate] = useState("");
  const [newSoilType, setNewSoilType] = useState("");
  const [newSoilPH, setNewSoilPH] = useState("");
  const [newPestControl, setNewPestControl] = useState("");
  const [newActualHarvestDate, setNewActualHarvestDate] = useState("");
  const [newLastUpdate, setNewLastUpdate] = useState("");

  const cropsCollectionRef = collection(db, "crops");

  const getCropList = async () => {
    try {
      const data = await getDocs(cropsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCropList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCropList();
  }, []);

  const onSubmitCrop = async (e) => {
    e.preventDefault();

    try {
      await addDoc(cropsCollectionRef, {
        type: newCropType,
        number: newCropNumber,
        avgSize: newCropSize,
        area: newArea,
        plantingMethod: newPlantingMethod,
        plantingDate: newPlantingDate,
        estimatedHarvestDate: newEstimatedHarvestDate,
        growthStage: newGrowthStage,
        status: newStatus,
        fertilizationDate: newFertilizationDate,
        soilType: newSoilType,
        soilPH: newSoilPH,
        pestControl: newPestControl,
        actualHarvestDate: newActualHarvestDate,
        lastUpdate: newLastUpdate,
        userId: auth?.currentUser?.uid,
      });

      setNewCropType("");
      setNewCropNumber("");
      setNewCropSize("");
      setNewArea("");
      setNewPlantingMethod("");
      setNewPlantingDate("");
      setNewEstimatedHarvestDate("");
      setNewGrowthStage("");
      setNewStatus("");
      setNewFertilizationDate("");
      setNewSoilType("");
      setNewSoilPH("");
      setNewPestControl("");
      setNewActualHarvestDate("");
      setNewLastUpdate("");

      getCropList();
      navigate("/crops");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="logo">
        <img src={Logo} alt="Your Logo" width="500px" />
      </div>
      <div className="flex">
        <Sidebar />
        <div className="w-full max-w-md mx-auto">
          {/* <h1 className="text-green">Add Crop</h1> */}
          <form
            onSubmit={onSubmitCrop}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Crop Type"
                type="text"
                value={newCropType}
                onChange={(e) => setNewCropType(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Number"
                type="text"
                value={newCropNumber}
                onChange={(e) => setNewCropNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Average Size"
                type="text"
                value={newCropSize}
                onChange={(e) => setNewCropSize(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Area"
                type="text"
                value={newArea}
                onChange={(e) => setNewArea(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Planting Method"
                type="text"
                value={newPlantingMethod}
                onChange={(e) => setNewPlantingMethod(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Planting Date"
                type="text"
                value={newPlantingDate}
                onChange={(e) => setNewPlantingDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Estimated Harvest Date"
                type="text"
                value={newEstimatedHarvestDate}
                onChange={(e) =>
                  setNewEstimatedHarvestDate(e.target.value)
                }
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Growth Stage"
                type="text"
                value={newGrowthStage}
                onChange={(e) => setNewGrowthStage(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Status"
                type="text"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Fertilization Date"
                type="text"
                value={newFertilizationDate}
                onChange={(e) => setNewFertilizationDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Soil Type"
                type="text"
                value={newSoilType}
                onChange={(e) => setNewSoilType(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Soil pH"
                type="text"
                value={newSoilPH}
                onChange={(e) => setNewSoilPH(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Pest Control"
                type="text"
                value={newPestControl}
                onChange={(e) => setNewPestControl(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Actual Harvest Date"
                type="text"
                value={newActualHarvestDate}
                onChange={(e) =>
                  setNewActualHarvestDate(e.target.value)
                }
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last Update"
                type="text"
                value={newLastUpdate}
                onChange={(e) => setNewLastUpdate(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                className="p-2 bg-green-700 text-white rounded hover:bg-green-800"
                onClick={onSubmitCrop}
              >
                Add Crop
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCrop;
