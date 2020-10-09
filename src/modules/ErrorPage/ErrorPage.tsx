import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <div className={classes.errorPageStyling}>
      <h1>Oops, there is nothing here!</h1>
      <p>If you dont mind, press this button to go back home</p>
      <Link to="/">
        <button className={classes.goHomeBtn}>Go home</button>
      </Link>
    </div>
  );
}

export default {
  routeProps: {
    path: '*',
    component: ErrorPage,
  },
  name: ErrorPage,
};
