import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic to handle login here
      console.log('Login attempted with email:', email, 'and password:', password);
      // Dummy check for demonstration
      //if (email === 'user@example.com' && password === 'password') {
      if (email === '1@1' && password === '1') {
        alert('Login successful.');
        navigate('/muscle_groups'); // Use useNavigate hook to navigate
      } else {
        alert('Login failed. Incorrect email or password.');
      }
    };

    return (
        <div>
          <nav className="container-fluid">
            <ul>
              <li><strong>Fitness Tracker</strong></li>
            </ul>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact" role="button">Contact</Link></li>
            </ul>
          </nav>
          <main className="container">
            <div className="grid">
              <section>
                <hgroup>
                  <h2>Login</h2>
                  <h3>Welcome back!</h3>
                </hgroup>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username">Username (Email)</label>
                  <input type="email" id="username" name="username" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button type="submit">Login</button>
                </form>
                <p><Link to="/forgot_password">Forgot Password?</Link></p>
                <p><Link to="/create_account">Create Account</Link></p>
              </section>
            </div>
          </main>
          <footer className="container">
            <small><Link to="/privacy">Privacy Policy</Link> • <Link to="/terms">Terms of Service</Link></small>
          </footer>
        </div>
      );
}

export default Home;
