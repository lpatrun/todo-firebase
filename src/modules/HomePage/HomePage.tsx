import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootReducer } from '../../store/reducers';
import classes from './HomePage.module.css';

function HomePage() {
  const isAuth: boolean = useSelector<RootReducer, boolean>(
    (state) => state.userReducer.isAuthenticated
  );

  return (
    <div className={classes.homePageStyling}>
      <h1>Welcome home</h1>

      {isAuth ? (
        <p>Click on Todos to see your tasks</p>
      ) : (
        <>
          <p>To continue, please Sign in or Sign up</p>
          <div className={classes.buttonsContainer}>
            <Link to="/signin">
              <button className={classes.signInBtn}>Sign In</button>
            </Link>
            <Link to="/signup">
              <button className={classes.signUpBtn}>Sign Up</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default {
  routeProps: {
    path: '/',
    component: HomePage,
  },
  name: HomePage,
};
