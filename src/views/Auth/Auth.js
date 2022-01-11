import { useState } from 'react';
import * as users from '../../services/users';
import './Auth.css';

export default function Auth() {
  const [type, setType] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    let response;
    try {
      e.preventDefault();
      response =
        type === 'login'
          ? await users.signInUser(email, password)
          : await users.signUpUser(email, password);
      setCurrentUser(response);
    } catch {
      setMessage('Invalid email or password');
    }
  };

  return (
    <>
      {currentUser ? (
        <h1>Success</h1>
      ) : (
        <div>
          {type === 'login' ? (
            <h1
              onClick={() => {
                setType('register');
                setMessage('');
              }}
            >
              Login
            </h1>
          ) : (
            <h1
              onClick={() => {
                setType('login');
                setMessage('');
              }}
            >
              Register
            </h1>
          )}
          <p style={{ color: '#ff0000' }}>{message}</p>
          <form className="auth-form">
            <label htmlFor="email">E-mail:</label>
            <input
              name="email"
              value={email}
              type="email"
              placeholder="email@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              value={password}
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      )}
    </>
  );
}
