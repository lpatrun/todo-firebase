export interface UserState {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: false,
};

type Action = { type: string };

const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case 'VALID_AUTH':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default userReducer;
