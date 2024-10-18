import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ExerciseStyles.module.css';

function Abs() {
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
    navigate('/muscle_groups'); // Adjust as needed, e.g., navigate(-1) for the previous page.
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Abdominal Exercises</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => handleExerciseClick('Planks')}>Planks</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Bicycle Crunches')}>Bicycle Crunches</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Russian Twists')}>Russian Twists</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Hanging Leg Raises')}>Hanging Leg Raises</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Mountain Climbers')}>Mountain Climbers</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Ab Rollouts')}>Ab Rollouts</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Reverse Crunches')}>Reverse Crunches</button>
        <button className={styles.button} onClick={() => handleExerciseClick('V-Ups')}>V-Ups</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Toe Touches')}>Toe Touches</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Side Planks')}>Side Planks</button>
      </div>
      <button className={`${styles.button} ${styles.goBackButton}`} onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Abs;
