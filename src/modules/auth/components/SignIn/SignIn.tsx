import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import allActions from '../../../../store/actions';
import classes from './SignIn.module.css';

function SignIn() {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(allActions.userActions.validAuth());
    dispatch(allActions.userActions.authenticate(email, password))
    history.push('/');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classes.signInPageStyling}>
      <form onSubmit={handleSignIn}>
        <p>Username</p>
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Pasword..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default {
  routeProps: {
    path: '/signin',
    component: SignIn,
  },
  name: SignIn,
};
