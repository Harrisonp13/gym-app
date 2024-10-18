import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ExerciseStyles.module.css';

function Triceps() {
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
    navigate('/muscle_groups'); // Adjust this as necessary, e.g., navigate(-1) for going back.
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tricep Exercises</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => handleExerciseClick('Tricep Dips')}>Tricep Dips</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Close-Grip Bench Press')}>Close-Grip Bench Press</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Skull Crushers')}>Skull Crushers (Lying Tricep Extensions)</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Tricep Pushdowns')}>Tricep Pushdowns</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Overhead Tricep Extensions')}>Overhead Tricep Extensions</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Diamond Push-Ups')}>Diamond Push-Ups</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Tricep Kickbacks')}>Tricep Kickbacks</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Rope Pushdowns')}>Rope Pushdowns</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Single-Arm Overhead Extensions')}>Single-Arm Overhead Extensions</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Bench Dip')}>Bench Dip</button>
      </div>
      <button className={`${styles.button} ${styles.goBackButton}`} onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Triceps;
