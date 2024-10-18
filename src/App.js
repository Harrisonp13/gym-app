import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; // Add the .jsx extension if necessary
import CreateAccount from './CreateAccount.jsx';
import ForgotPassword from './forgotPassword.jsx';
import MuscleGroups from './MuscleGroups.jsx';
import ExerciseDetail from './ExerciseDetail.js';
import Progress from './Progress.js';

// Import muscle group components from the new 'DifMuscleGroups' folder
import Chest from './DifMuscleGroups/ChestMuscles.jsx';
import Back from './DifMuscleGroups/Back.jsx';
import Biceps from './DifMuscleGroups/Biceps.jsx';
import Triceps from './DifMuscleGroups/Triceps.jsx';
import Shoulders from './DifMuscleGroups/Shoulders.jsx';
import Abs from './DifMuscleGroups/Abs.jsx';
import Legs from './DifMuscleGroups/Legs.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/muscle_groups" element={<MuscleGroups />} />
        
        {/* Updated routes for muscle groups, pointing to the new components in DifMuscleGroups folder */}
        <Route path="/muscle/chest" element={<Chest />} />
        <Route path="/muscle/back" element={<Back />} />
        <Route path="/muscle/biceps" element={<Biceps />} />
        <Route path="/muscle/triceps" element={<Triceps />} />
        <Route path="/muscle/shoulders" element={<Shoulders />} />
        <Route path="/muscle/abs" element={<Abs />} />
        <Route path="/muscle/legs" element={<Legs />} />
        <Route path="/exercise_detail" element={<ExerciseDetail />} />
        <Route path="/progress" element={<Progress />} /> 

      </Routes>
    </Router>
  );
}

export default App;
