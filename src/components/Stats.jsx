import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { getDocs, collection } from "firebase/firestore";

const Stats = () => {
  const [livestockCount, setLivestockCount] = useState(0);
  const [cropCount, setCropCount] = useState(0);
  const [inventoryCount, setInventoryCount] = useState(0);
  const [userCount, setUserCount] = useState(0); // Add userCount state

  useEffect(() => {
    // Fetch data from Firebase collections
    const fetchData = async () => {
      try {
        const livestockCollection = collection(db, 'animals');
        const cropCollection = collection(db, 'crops');
        const inventoryCollection = collection(db, 'inventory');
        const userCollection = collection(db, 'users'); // Add user collection

        const livestockData = await getDocs(livestockCollection);
        const cropData = await getDocs(cropCollection);
        const inventoryData = await getDocs(inventoryCollection);
        const userData = await getDocs(userCollection); // Fetch user data

        setLivestockCount(livestockData.size);
        setCropCount(cropData.size);
        setInventoryCount(inventoryData.size);
        setUserCount(userData.size); // Set user count
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-32 w-44 border border-gray-300 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Livestock count</h3>
        <p>{livestockCount}</p>
      </div>
      <div className="h-32 w-44 border border-gray-300 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Crop count</h3>
        <p>{cropCount}</p>
      </div>
      <div className="h-32 w-44 border border-gray-300 p-4 rounded-lg mb-0.5">
        <h3 className="text-lg font-semibold">Inventory count</h3>
        <p>{inventoryCount}</p>
      </div>
      <div className="h-32 w-44 border border-gray-300 p-4 rounded-lg mt-0.5">
        <h3 className="text-lg font-semibold">User count</h3>
        <p>{userCount}</p>
      </div>
    </div>
  );
};

export default Stats;
