export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isFatching: true,
        adminUser: null,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isFatching: false,
        adminUser: action.payload,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isFatching: false,
        adminUser: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
