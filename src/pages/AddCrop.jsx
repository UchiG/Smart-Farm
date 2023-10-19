import { useState, useEffect } from "react"
import { db, auth } from "../config/firebase"
import { Auth } from "../components/auth"
import Sidebar from "../components/Sidebar"

import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore"

const AddCrop = () => {
  const [cropList, setCropList] = useState([])

  const [newCropType, setNewCropType] = useState("")
  const [newCropNumber, setNewCropNumber] = useState("")
  const [newCropSize, setNewCropSize] = useState("")
  // const [newArea, setNewArea] = useState("")
  // const [newPlantingMethod, setNewPlantingMethod] = useState("")
  // const [newPlantingDate, setNewPlantingDate] = useState("")
  // const [newEstimatedHarvestDate, setNewEstimatedHarvestDate] = useState("")
  // const [newGrowthStage, setNewGrowthStage] = useState("")
  // const [newStatus, setNewStatus] = useState("")
  // const [newFertilizationDate, setNewFertilizationDate] = useState("")
  // const [newSoilType, setNewSoilType] = useState("")
  // const [newSoilPH, setNewSoilPH] = useState("")
  // const [newPestControl, setNewPestControl] = useState("")
  // const [newActualHarvestDate, setNewActualHarvestDate] = useState("")
  // const [newLastUpdate, setNewLastUpdate] = useState("")

  const [updatedSize, setUpdatedSize] = useState("")

  const cropsCollectionRef = collection(db, "crops")

  const getCropList = async () => {
    try {
      const data = await getDocs(cropsCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      console.log(filteredData)
      setCropList(filteredData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getCropList()
  }, [])

  const onSubmitCrop = async (e) => {
    try {
      await addDoc(cropsCollectionRef, {
        type: newCropType,
        number: newCropNumber,
        avgSize: newCropSize,
        userId: auth?.currentUser?.uid,
      })
      // Clear input fields
      setNewCropType("")
      setNewCropNumber("")
      setNewCropSize("")
      getCropList()
    } catch (error) {
      console.error(error)
    }
  }

  const deleteCrop = async (id) => {
    const cropDoc = doc(db, "crops", id)
    await deleteDoc(cropDoc)
    getCropList()
  }

  const updateCropSize = async (id) => {
    const cropDoc = doc(db, "crops", id)
    await updateDoc(cropDoc, { avgSize: updatedSize })
    getCropList()
  }

  return (
    <div className="flex">
      <Sidebar />

      {/* <Auth /> */}
      <div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Crop type"
            value={newCropType}
            onChange={(e) => setNewCropType(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Number"
            type="text"
            value={newCropNumber}
            onChange={(e) => setNewCropNumber(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Average Size"
            type="text"
            value={newCropSize}
            onChange={(e) => setNewCropSize(e.target.value)}
          />
        </div>
        <button
          className="p-2 bg-green-700 text-white rounded hover:bg-green-800"
          onClick={onSubmitCrop}
        >
          Add Crop
        </button>
      </div>
    </div>
  )
}

export default AddCrop
