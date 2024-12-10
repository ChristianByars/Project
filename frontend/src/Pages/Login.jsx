import { LoginButton } from '../Components/LoginButton';
import '../App.css'
import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, app } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


export function Login() {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate('')
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/Profile')
      })

  }

  return (
    <center> <div className="Login">
      <h1>OnlyCats</h1>
      <form onSubmit={signIn}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
        <br />
        <center><LoginButton /></center>
      </form>
      Don't have an account? <Link to='/ChooseTeam'>Choose Teams!</Link>
    </div>
    </center>
  );
}