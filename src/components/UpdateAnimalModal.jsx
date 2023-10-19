import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for the modal

const UpdateAnimalModal = ({
  isOpen,
  onRequestClose,
  onUpdateAnimal,
  initialData,
}) => {
  const [updatedType, setUpdatedType] = useState(initialData.type);
  const [updatedColor, setUpdatedColor] = useState(initialData.color);
  const [updatedBreed, setUpdatedBreed] = useState(initialData.breed);
  const [updatedSpecies, setUpdatedSpecies] = useState(initialData.species);
  const [updatedAge, setUpdatedAge] = useState(initialData.age);

  const handleUpdate = () => {
    // Call the onUpdateAnimal function with updated data
    onUpdateAnimal({
      type: updatedType,
      color: updatedColor,
      breed: updatedBreed,
      species: updatedSpecies,
      age: updatedAge,
    });
    // Close the modal
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Update Animal">
      <h2>Update Animal</h2>
      <div>
        <label>Type:</label>
        <input
          type="text"
          value={updatedType}
          onChange={(e) => setUpdatedType(e.target.value)}
        />
      </div>
      <div>
        <label>Color:</label>
        <input
          type="text"
          value={updatedColor}
          onChange={(e) => setUpdatedColor(e.target.value)}
        />
      </div>
      <div>
        <label>Breed:</label>
        <input
          type="text"
          value={updatedBreed}
          onChange={(e) => setUpdatedBreed(e.target.value)}
        />
      </div>
      <div>
        <label>Species:</label>
        <input
          type="text"
          value={updatedSpecies}
          onChange={(e) => setUpdatedSpecies(e.target.value)}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          value={updatedAge}
          onChange={(e) => setUpdatedAge(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </Modal>
  );
};

export default UpdateAnimalModal;
