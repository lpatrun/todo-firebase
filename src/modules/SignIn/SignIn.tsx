import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import allActions from '../../store/actions/index';
import classes from './SignIn.module.css';

function SignIn() {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(allActions.userActions.validAuth());
    history.push('/');
  };

  return (
    <div className={classes.signInPageStyling}>
      <form onSubmit={handleSignIn}>
        <p>Username</p>
        <input type="text" placeholder="Username..." />
        <p>Password</p>
        <input type="password" placeholder="Pasword..." />
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
