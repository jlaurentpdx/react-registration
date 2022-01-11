import { useState } from 'react';
import * as users from '../../services/users';
import './Auth.css';

export default function Auth() {
  const [type, setType] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    let response;
    try {
      e.preventDefault();
      response =
        type === 'login' ? users.signInUser(email, password) : users.signUpUser(email, password);
    } catch {
      alert('something went wrong');
    }
    setCurrentUser(response);
  };

  return (
    <>
      {currentUser ? (
        <h1>Success</h1>
      ) : (
        <div>
          <h1>Login</h1>
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
      ;
    </>
  );
}
