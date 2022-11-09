export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
        quantity: state.quantity + 1,
        total: state.total + action.payload.price * action.payload.quantity,
      };

    case "CHANGE_PRODUCT_QUANTITY":
      return {
        ...state,
        products: state.products.map(p => {
          if (p._id === action.payload.id) {
            return { ...p, quantity: action.payload.quantity };
          } else {
            return p;
          }
        }),
        total: state.total + action.payload.price * action.payload.diff,
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(p => p._id !== action.payload.id),
        quantity: state.quantity - 1,
        total: state.total - action.payload.price * action.payload.quantity,
      };

    case "RESET":
      return {
        ...state,
        products: [],
        quantity: 0,
        total: 0,
      };
    default:
      return state;
  }
};
