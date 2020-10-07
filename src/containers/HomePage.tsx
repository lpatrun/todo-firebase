import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './HomePage.module.css';

function HomePage(props: any) {
  return (
    <div className={classes.homePageStyling}>
      <h1>Welcome home</h1>

      {
        props.isAuth ?
          <p>Click on Todos to see your tasks</p>
          :
          <React.Fragment>
            <p>To continue, please Sign in or Sign up</p>
            <div className={classes.buttonsContainer}>
              <Link to={'/signin'}><button className={classes.signInBtn}>Sign In</button></Link>
              <Link to={'/signup'}><button className={classes.signUpBtn}>Sign Up</button></Link>
            </div>
          </React.Fragment>
      }

    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.todosReducerReducer.isAuthenticated
  }
}

export default connect(mapStateToProps)(HomePage);