import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import HomePage from './containers/HomePage';
import TodoList from './containers/TodoList';
import TodoComponent from './components/TodoComponent';
import ErrorPage from './containers/ErrorPage';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import LogoutPage from './containers/LogoutPage';

function App(props: any) {
  return (
    <div className="App">

      {
        !props.isAuth ?
          <Router>
            <nav className='navigetion'>
              <div>
                <NavLink to='/'>Todo home</NavLink>
              </div>
              <div>
                <NavLink to='/signin'>Sign In</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
              </div>
            </nav>
            <Switch>
              <Route path="/" exact><HomePage /></Route>
              <Route path="/signin" render={(props) => <SignIn {...props} />} />
              <Route path="/signup" render={(props) => <SignUp {...props} />} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </Router>
          :
          <Router>
            <nav className='navigetion'>
              <div>
                <NavLink to='/'>Todo home</NavLink>
              </div>
              <div>
                <NavLink to='/todos'>Todos</NavLink>
                <NavLink to='/logout'>Logout</NavLink>
              </div>
            </nav>
            <Switch>
              <Route path="/" exact><HomePage /></Route>
              <Route path="/todos" render={(props) => <TodoList {...props} />} />
              <Route path="/logout" component={LogoutPage} />
              <Route path="/todos/:todo_id" render={(props) => <TodoComponent {...props} />} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </Router>
      }
      
    </div >
  );
}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.todosReducerReducer.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);