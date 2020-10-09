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

export default {
  validAuth,
  logout,
};
