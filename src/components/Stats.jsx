const Stats = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="h-32 w-44 border border-gray-300 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Livestock count</h3>
          {/* Content for Livestock count */}
        </div>
        <div className="h-32 w-44 border border-gray-300 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Crop count</h3>
          {/* Content for Crop count */}
        </div>
        <div className="h-32 w-44 border border-gray-300 p-4 rounded-lg mb-0.5">
          <h3 className="text-lg font-semibold">Inventory count</h3>
          {/* Content for Inventory count */}
        </div>
        <div className="h-32 w-44 border border-gray-300 p-4 rounded-lg mt-0.5">
          <h3 className="text-lg font-semibold">Your Custom Title</h3>
          {/* Content for the custom title */}
        </div>
      </div>
    );
  }
  
  export default Stats;
  