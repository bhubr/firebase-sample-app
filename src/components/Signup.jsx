import React, { useState } from 'react';
import firebase from 'firebase';

function App() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    const { email, password } = data;
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(setError);
  };
  const handleChange = ({ target: { name, value } }) =>
    setData((prevData) => ({ ...prevData, [name]: value }));

  const { email, password } = data;
  return (
    <div className="Signup">
      {error && <div style={{ border: '2px solid red' }}>{error.message}</div>}
      <form onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default App;
