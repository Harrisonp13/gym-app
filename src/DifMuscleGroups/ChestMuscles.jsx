import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ExerciseStyles.module.css';

function Chest() {
  const navigate = useNavigate();

  // Function to handle exercise clicks and pass data dynamically
  const handleExerciseClick = (exercise) => {
    const exerciseData = {
      name: exercise,
      image: `/images/${exercise.replace(/ /g, '-').toLowerCase()}.png`, // Adjust image paths as necessary
    };
    navigate('/exercise_detail', { state: { exercise: exerciseData } });
  };

  const handleGoBack = () => {
    navigate('/muscle_groups');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Chest Exercises</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => handleExerciseClick('Bench Press')}>Bench Press</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Incline Bench Press')}>Incline Bench Press</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Fly Machine')}>Fly Machine</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Dumbbell Flyes')}>Dumbbell Flyes</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Cable Crossover')}>Cable Crossover</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Decline Bench Press')}>Decline Bench Press</button>
      </div>
      <button className={`${styles.button} ${styles.goBackButton}`} onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Chest;
