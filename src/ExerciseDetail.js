import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ExerciseDetail() {
  const location = useLocation();
  const { exercise } = location.state; // Get the passed exercise data (name, image)
  const navigate = useNavigate();

  // State to control the visibility of the Add Sets modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sets, setSets] = useState([{ reps: '', setNumber: '' }]);

  const handleAddSets = () => {
    setIsModalOpen(true);
  };

  const handleProgressClick = () => {
    navigate('/progress', { state: { exercise } });
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous screen
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (index, field, value) => {
    const updatedSets = [...sets];
    updatedSets[index][field] = value;
    setSets(updatedSets);
  };

  const handleAddSet = () => {
    setSets([...sets, { reps: '', setNumber: '' }]);
  };

  return (
    <div>
      <h2>{exercise.name}</h2>
      <img src={exercise.image} alt={exercise.name} style={{ width: '200px', height: '200px' }} />

      <button onClick={handleAddSets}>Add Sets</button>
      <button onClick={handleProgressClick}>View Progress</button>
      <button onClick={handleGoBack}>Go Back</button>

      {/* Modal for Adding Sets */}
      {isModalOpen && (
        <div style={modalStyle}>
          <h3>Add Sets for {exercise.name}</h3>
          {sets.map((set, index) => (
            <div key={index} style={inputContainerStyle}>
              <label>Set {index + 1}:</label>
              <input
                type="number"
                placeholder="Reps"
                value={set.reps}
                onChange={(e) => handleInputChange(index, 'reps', e.target.value)}
              />
              <input
                type="number"
                placeholder="Set Number"
                value={set.setNumber}
                onChange={(e) => handleInputChange(index, 'setNumber', e.target.value)}
              />
            </div>
          ))}
          <button onClick={handleAddSet}>Add Another Set</button>
          <button onClick={handleModalClose}>Close</button>
        </div>
      )}
    </div>
  );
}

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
};

const inputContainerStyle = {
  marginBottom: '10px',
};

export default ExerciseDetail;
