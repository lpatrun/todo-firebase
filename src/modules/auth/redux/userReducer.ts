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

    case 'AUTH_START':
      return {
        ...state
      }

    case 'AUTH_SUCCESS':
      console.log("Auth success")
      return {
        ...state
      }

    case 'AUTH_FAIL':
      console.log('auth fail')
      return {
        ...state
      }
    default:
      return state;
  }
};

export default userReducer;
