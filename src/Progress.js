import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Progress() {
  const location = useLocation();
  const { exercise } = location.state; // Get the exercise data
  const navigate = useNavigate();

  // Mockup progress data (replace with actual data if available)
  const progressData = [
    { date: '2024-01-10', sets: 3, weight: 100, reps: 10 },
    { date: '2024-01-15', sets: 4, weight: 105, reps: 8 },
  ];

  return (
    <div>
      <h2>Progress for {exercise.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Sets</th>
            <th>Weight (kg)</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {progressData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.sets}</td>
              <td>{data.weight}</td>
              <td>{data.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Progress;
