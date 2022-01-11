import { useState } from 'react';
import * as users from '../../services/users';
import AuthForm from '../../components/AuthForm/AuthForm';
import './Auth.css';
import Header from '../../components/Header/Header';

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
        <h1>Success!</h1>
      ) : (
        <div>
          <Header {...{ type, setType, setMessage }} />
          <AuthForm {...{ email, setEmail, password, setPassword, message, handleSubmit }} />
        </div>
      )}
    </>
  );
}
