import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ExerciseStyles.module.css';

function Shoulders() {
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
    navigate('/muscle_groups'); // Adjust accordingly, or use navigate(-1) to go back
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Shoulder Exercises</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => handleExerciseClick('Overhead Press')}>Overhead Press</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Lateral Raises')}>Lateral Raises</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Front Raises')}>Front Raises</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Seated Dumbbell Press')}>Seated Dumbbell Press</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Arnold Press')}>Arnold Press</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Upright Rows')}>Upright Rows</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Face Pulls')}>Face Pulls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Reverse Flyes')}>Reverse Flyes</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Shrugs')}>Shrugs</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Push Press')}>Push Press</button>
      </div>
      <button className={`${styles.button} ${styles.goBackButton}`} onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Shoulders;
