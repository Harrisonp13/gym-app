import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ExerciseStyles.module.css';

function Legs() {
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
    navigate('/muscle_groups'); // Adjust as necessary
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Leg Exercises</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => handleExerciseClick('Squats')}>Squats</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Lunges')}>Lunges</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Deadlifts')}>Deadlifts</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Leg Press')}>Leg Press</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Bulgarian Split Squats')}>Bulgarian Split Squats</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Calf Raises')}>Calf Raises</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Hip Thrust')}>Hip Thrust</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Hamstring Curls')}>Hamstring Curls</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Leg Extensions')}>Leg Extensions</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Hack Squat')}>Hack Squat</button>
        <button className={styles.button} onClick={() => handleExerciseClick('Romanian Deadlift')}>Romanian Deadlift</button>
      </div>
      <button className={`${styles.button} ${styles.goBackButton}`} onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Legs;
