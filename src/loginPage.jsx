import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle login here
    console.log('Login attempted with email:', email, 'and password:', password);
    alert('Login functionality not implemented in this example.');
  };

  return (
    <div>
      <nav className="container-fluid">
        <ul>
          <li><strong>Fitness Tracker</strong></li>
        </ul>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#" role="button">Contact</a></li>
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
            <p><a href="#" onClick={(e) => { e.preventDefault(); alert('Forgot Password functionality not implemented'); }}>Forgot Password?</a></p>
            <p><a href="#" onClick={(e) => { e.preventDefault(); alert('Create Account functionality not implemented'); }}>Create Account</a></p>
          </section>
        </div>
      </main>
      <footer className="container">
        <small><a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a></small>
      </footer>
    </div>
  );
}

export default LoginPage;
