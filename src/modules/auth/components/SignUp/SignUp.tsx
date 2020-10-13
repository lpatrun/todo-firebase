import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import allActions from '../../../../store/actions';
import classes from './SignUp.module.css';

function SignUp() {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(allActions.userActions.validAuth());
    history.push('/');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classes.signUpPageStyling}>
      <form onSubmit={handleSignUp}>
        <p>Username</p>
        <input
          type="email"
          placeholder="Your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Select pasword..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default {
  routeProps: {
    path: '/signup',
    component: SignUp,
  },
  name: SignUp,
};
