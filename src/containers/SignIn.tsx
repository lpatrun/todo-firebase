import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validAuth } from '../store/actions/todoActions';
import classes from './SignIn.module.css';

function SignIn (props: any) {

  let history = useHistory();

  const handleSignIn = (e: any) => {
    e.preventDefault();
    props.validAuth();
    history.push('/');
  }

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
  )
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => {
  return {
    validAuth: () => { dispatch(validAuth()) }
  }
}

export default connect(null, mapDispatchToProps)(SignIn);