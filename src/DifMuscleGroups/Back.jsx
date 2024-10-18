import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ExerciseStyles.module.css';

function Back() {
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
      <h2 className={styles.title}>Back Exercises</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => handleExerciseClick('Deadlifts')}>Deadlifts</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Pull-Ups')}>Pull-Ups</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Bent Over Rows')}>Bent Over Rows</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Lat Pulldowns')}>Lat Pulldowns</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Seated Cable Rows')}>Seated Cable Rows</button>
        <button className={styles.button} onClick={() => handleExerciseClick('T-Bar Rows')}>T-Bar Rows</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Single-Arm Dumbbell Rows')}>Single-Arm Dumbbell Rows</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Face Pulls')}>Face Pulls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Superman Exercise')}>Superman Exercise</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Reverse Snow Angels')}>Reverse Snow Angels</button>
      </div>
      <button className={`${styles.button} ${styles.goBackButton}`} onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Back;
