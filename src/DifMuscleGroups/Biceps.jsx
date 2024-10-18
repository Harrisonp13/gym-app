import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ExerciseStyles.module.css';

function Biceps() {
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
    navigate('/muscle_groups'); // Adjust the path as necessary
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bicep Exercises</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => handleExerciseClick('Bicep Curls')}>Bicep Curls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Hammer Curls')}>Hammer Curls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Preacher Curls')}>Preacher Curls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Concentration Curls')}>Concentration Curls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Chin-ups')}>Chin-ups</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Cable Bicep Curls')}>Cable Bicep Curls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Incline Dumbbell Curls')}>Incline Dumbbell Curls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Barbell Curls')}>Barbell Curls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Zottman Curls')}>Zottman Curls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Reverse Curls')}>Reverse Curls</button>
      </div>
      <button className={`${styles.button} ${styles.goBackButton}`} onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Biceps;
