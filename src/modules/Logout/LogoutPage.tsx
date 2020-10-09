import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import allActions from '../../store/actions/index';
import classes from './LogoutPage.module.css';

function LogoutPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(allActions.userActions.logout());
    history.push('/');
  };

  return (
    <div className={classes.logoutPageStyling}>
      <h1>Click button to logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default {
  routeProps: {
    path: '/logout',
    component: LogoutPage,
  },
  name: LogoutPage,
};
