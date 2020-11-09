import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyCLVjtNr1MmITHrNDIwghJnC4_506_s8uQ',
  authDomain: 'chat-app-4f2a2.firebaseapp.com',
  databaseURL: 'https://chat-app-4f2a2.firebaseio.com',
  projectId: 'chat-app-4f2a2',
  storageBucket: 'chat-app-4f2a2.appspot.com',
  messagingSenderId: '863061044732',
  appId: '1:863061044732:web:298fa2b84fc5dc29045679',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
