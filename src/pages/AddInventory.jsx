import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { db, auth } from "../config/firebase"
import { Auth } from "../components/auth"
import Sidebar from "../components/Sidebar"
import {
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore"

const AddInventory = () => {

  const navigate = useNavigate();

  const [machineList, setMachineList] = useState([])

  const [newMachineType, setNewMachineType] = useState("")
  const [newMachineCost, setNewMachineCost] = useState("")
  const [newMachineQuantity, setNewMachineQuantity] = useState("")

  const [newLastMaintenanceDate, setNewLastMaintenanceDate] = useState("")

  // const [newPurchaseDate, setNewPurchaseDate] = useState("")
  // const [newMaintenanceSchedule, setNewMaintenanceSchedule] = useState("")
  // const [newCondition, setNewCondition] = useState("")
  // const [newWarrantyEndDate, setNewWarrantyEndDate] = useState("")


  const inventoryCollectionRef = collection(db, "inventory")

  const getMachineList = async () => {
    try {
      const data = await getDocs(inventoryCollectionRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      console.log(filteredData)
      setMachineList(filteredData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMachineList()
  }, [])

  const onSubmitMachine = async (e) => {
    try {
      await addDoc(inventoryCollectionRef, {
        machineType: newMachineType,
        costPerMachine: newMachineCost,
        quantity: newMachineQuantity,
        userId: auth?.currentUser?.uid,
      })
      // Clear input fields
      setNewMachineType("")
      setNewMachineCost("")
      setNewMachineQuantity("")
      getMachineList()
      navigate("/inventory")
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="flex">
      {/* <Auth /> */}
      <Sidebar />

      <div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Machine type"
            value={newMachineType}
            onChange={(e) => setNewMachineType(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Cost per Machine"
            type="text"
            value={newMachineCost}
            onChange={(e) => setNewMachineCost(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Quantity"
            type="text"
            value={newMachineQuantity}
            onChange={(e) => setNewMachineQuantity(e.target.value)}
          />
        </div>
        {/* <div className="mb-2">
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="Number"
            type="text"
            value={updatedNumber}
            onChange={(e) => setUpdatedNumber(e.target.value)}
          />
        </div> */}
        <button
          className="p-2 bg-green-700 text-white rounded hover:bg-green-800"
          onClick={onSubmitMachine}
        >
          Add Machine
        </button>
      </div>
    </div>
  )
}

export default AddInventory
