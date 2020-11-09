import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import AuthContext from '../contexts/auth';

export default function withAuth(WrappedComponent) {
  return () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      firebase.auth().onAuthStateChanged((fbUser) => {
        if (fbUser) {
          const { uid, displayName, email, emailVerified, photoURL } = fbUser;
          setUser({ uid, displayName, email, emailVerified, photoURL });
        } else {
          setUser(null);
        }
      });
    });
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <WrappedComponent />
      </AuthContext.Provider>
    );
  };
}
