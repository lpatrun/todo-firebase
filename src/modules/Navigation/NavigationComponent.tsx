import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootReducer } from '../../store/reducers';

const NavigationComponent = () => {
  const isAuth: boolean = useSelector<RootReducer, boolean>(
    (state) => state.userReducer.isAuthenticated
  );

  return (
    <nav className="navigetion">
      <div>
        <NavLink exact to="/">
          Todo home
        </NavLink>
      </div>
      <div>
        {!isAuth && (
          <React.Fragment>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </React.Fragment>
        )}

        {isAuth && (
          <React.Fragment>
            <NavLink to="/todos">Todos</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavigationComponent;
