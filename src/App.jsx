import React from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import withAuth from './hoc/withAuth';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Signin />
    </div>
  );
}

export default withAuth(App);
