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
import DeleteIcon from "../assets/svg/deleteIcon.svg?react"
import EditIcon from "../assets/svg/editIcon.svg?react"
import Logo from "../assets/svg/logo.svg"

const Inventory = () => {
  const [machineList, setMachineList] = useState([])

  const [newMachineType, setNewMachineType] = useState("")
  const [newMachineCost, setNewMachineCost] = useState("")

  const [updatedNumber, setUpdatedNumber] = useState("")
  const [updatedType, setUpdatedType] = useState("")
  const [updatedCost, setUpdatedCost] = useState("")

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
        type: newMachineType,
        costPerMachine: newMachineCost,
        userId: auth?.currentUser?.uid,
      })
      getMachineList()
    } catch (error) {
      console.error(error)
    }
  }

  const deleteMachine = async (id) => {
    const machineDoc = doc(db, "inventory", id)
    await deleteDoc(machineDoc)
    getMachineList()
  }
  const updateMachine = async (id) => {
    const machineDoc = doc(db, "inventory", id)
    await updateDoc(machineDoc, {
      machineType: updatedType,
      costPerMachine: updatedCost,
      number: updatedNumber,
    })
    getMachineList()
  }

  return (
    <>
      <div className="logo">
        <img src={Logo} alt="Your Logo" width="500px" />
      </div>
      <div className="flex">
        <Sidebar />
        <div className="container mx-auto py-4">
          <div className="flex items-center space-x-4">
            <input
              className="p-2 border border-gray-300 rounded"
              placeholder="Machine type"
              onChange={(e) => setNewMachineType(e.target.value)}
            />
            <input
              className="p-2 border border-gray-300 rounded"
              placeholder="Cost"
              type="text"
              onChange={(e) => setNewMachineCost(e.target.value)}
            />
            <button
              className="p-2 bg-green-700 text-white rounded hover:bg-green-700"
              onClick={onSubmitMachine}
            >
              Add Machine
            </button>
          </div>
          <div className="mt-2">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-0.5 border border-gray-300 w-1/3">Type</th>
                  <th className="p-0.5 border border-gray-300 w-1/3">Cost</th>
                  <th className="p-0.5 border border-gray-300 w-1/3">Number</th>
                  <th className="p-0.5 border border-gray-300 w-1/3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {machineList.map((machine) => (
                  <tr key={machine.id}>
                    <td className="p-0.5 border border-gray-300">
                      {machine.machineType}
                    </td>
                    <td className="p-0.5 border border-gray-300">
                      {machine.costPerMachine}
                    </td>
                    <td className="p-0.5 border border-gray-300">
                      {machine.number}
                    </td>
                    <td className="p-0.5 border border-gray-300 flex space-x-2">
                      <div onClick={() => deleteMachine(machine.id)}>
                        <DeleteIcon fill="#ffffff" width="20px" height="20px" />
                      </div>
                      <div onClick={(e) => updateMachine(machine.id)}>
                        <EditIcon fill="#ffffff" width="20px" height="20px" />
                      </div>
                      <input
                        className="p-0.5 border border-gray-300 rounded"
                        placeholder="New Type"
                        onChange={(e) => setUpdatedType(e.target.value)}
                      />
                      <input
                        className="p-0.5 border border-gray-300 rounded"
                        placeholder="New Cost"
                        onChange={(e) => setUpdatedCost(e.target.value)}
                      />
                      <input
                        className="p-0.5 border border-gray-300 rounded"
                        placeholder="New Number"
                        onChange={(e) => setUpdatedNumber(e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inventory
