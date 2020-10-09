import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../HomePage/HomePage';
import SignIn from '../auth/components/SignIn/SignIn';
import SignUp from '../auth/components/SignUp/SignUp';
import LogoutPage from '../auth/components/Logout/LogoutPage';
import TodoList from '../todos-module/components/Todos/TodoList';
import SingleTodo from '../todos-module/components/SingleTodo/SingleTodo';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store/reducers';

const RoutesComponent = () => {
  const isAuth: boolean = useSelector<RootReducer, boolean>(
    (state) => state.userReducer.isAuthenticated
  );

  return (
    <Switch>
      <Route exact {...HomePage.routeProps} />
      {!isAuth && <Route {...SignIn.routeProps} />}
      {!isAuth && <Route {...SignUp.routeProps} />}
      {isAuth && <Route {...SingleTodo.routeProps} />}
      {isAuth && <Route {...TodoList.routeProps} />}
      {isAuth && <Route {...LogoutPage.routeProps} />}
      <Route {...ErrorPage.routeProps} />
    </Switch>
  );
};

export default RoutesComponent;
