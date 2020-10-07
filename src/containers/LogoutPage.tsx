import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../store/actions/todoActions';
import classes from './LogoutPage.module.css';

function LogoutPage(props: any) {

  let history = useHistory();

  const handleLogout = () => {
    props.logout();
    history.push('/');
  }

  return (
    <div className={classes.logoutPageStyling}>
      <h1>Click button to logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => { dispatch(logout()) }
  }
}

export default connect(null, mapDispatchToProps)(LogoutPage);