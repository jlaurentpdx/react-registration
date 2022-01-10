import { useState } from 'react';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>This is the authorization component.</h1>
      <form className="auth-form">
        <label className="form-control">
          email:
          <input
            value={email}
            type="email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form-control">
          password:
          <input
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
