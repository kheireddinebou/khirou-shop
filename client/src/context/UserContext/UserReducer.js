export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isFatching: true,
        currentUser: null,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isFatching: false,
        currentUser: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isFatching: false,
        currentUser: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
