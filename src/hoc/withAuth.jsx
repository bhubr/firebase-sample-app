import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import AuthContext from '../contexts/auth';

export default function withAuth(WrappedComponent) {
  return () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      firebase.auth().onAuthStateChanged((fbUser) => {
        if (fbUser) {
          const { uid, email, emailVerified } = fbUser;
          firebase
            .database()
            .ref(`/users/${uid}`)
            .once('value')
            .then((snapshot) => {
              const displayName =
                (snapshot.val() && snapshot.val().displayName) || 'Anonymous';
              const avatar =
                (snapshot.val() && snapshot.val().avatar) ||
                'https://via.placeholder.com/100x100';
              setUser({ uid, displayName, email, emailVerified, avatar });
            });
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
