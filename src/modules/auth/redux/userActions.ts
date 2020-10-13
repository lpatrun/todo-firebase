const validAuth = () => {
  return {
    type: 'VALID_AUTH',
  };
};

const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

const authStart = (email: string, password: string) => {
  return {
    type: 'AUTH_START',
    email,
    password
  }
}
const authSuccess = (authData: any) => {
  return {
    type: 'AUTH_SUCCESS',
    authData
  }
}
const authFail = (error: any) => {
  return {
    type: 'AUTH_FAIL',
    error
  }
}

const authenticate = (email: string, password: string) => {
  return (dispatch: (arg0: { type: string; }) => void) => {
    dispatch(authStart(email, password));
  }
}

export default {
  validAuth,
  logout,
  authStart,
  authSuccess,
  authFail,
  authenticate
};
