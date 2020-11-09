import React, { useContext } from 'react';
import firebase from 'firebase';
import AuthContext from '../contexts/auth';
import './Navbar.css';

function Navbar() {
  const { user } = useContext(AuthContext);

  const handleSignout = () => firebase.auth().signOut();
  return (
    <nav className="Navbar">
      <ul>
        <li>{user ? user.email : 'N/A'}</li>
        <li>
          <button type="button" onClick={handleSignout}>
            Sign out
          </button>
        </li>
        {user && (
          <li>
            <img src={user.avatar} alt={user.displayName} />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
