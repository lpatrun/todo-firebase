import React from 'react';
import { connect } from 'react-redux';
import { validAuth } from '../store/actions/todoActions';
import classes from './SignUp.module.css';

function SignUp (props: any) {

  const handleSignUp = (e: any) => {
    e.preventDefault();
    props.validAuth();
  }

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
  )
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    validAuth: () => { dispatch(validAuth()) }
  }
}

export default connect(null, mapDispatchToProps)(SignUp);