import React, { useState } from 'react';
import firebase from 'firebase';

function writeUserData(userId, displayName, avatar) {
  return firebase.database().ref(`users/${userId}`).set({
    displayName,
    avatar,
  });
}

function Profile() {
  const [data, setData] = useState({
    displayName: '',
    avatar: '',
  });
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    const { displayName, avatar } = data;
    e.preventDefault();
    const userId = firebase.auth().currentUser.uid;
    return writeUserData(userId, displayName, avatar).catch(setError);
  };

  const handleChange = ({ target: { name, value } }) =>
    setData((prevData) => ({ ...prevData, [name]: value }));

  const { displayName, avatar } = data;
  return (
    <div className="Profile">
      {error && <div style={{ border: '2px solid red' }}>{error.message}</div>}
      <form onSubmit={handleSubmit}>
        <h3>Edit profile</h3>
        <label htmlFor="displayName">
          Display name
          <input
            id="displayName"
            name="displayName"
            type="displayName"
            value={displayName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="avatar">
          Avatar
          <input
            id="avatar"
            name="avatar"
            type="avatar"
            value={avatar}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update profile</button>
      </form>
    </div>
  );
}

export default Profile;
