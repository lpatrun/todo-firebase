import React from 'react';
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

  return (
    <div className={classes.signUpPageStyling}>
      <form onSubmit={handleSignUp}>
        <p>Username</p>
        <input type="text" placeholder="Username..." />
        <p>Password</p>
        <input type="password" placeholder="Pasword..." />
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
