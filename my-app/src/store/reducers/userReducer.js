const initialState = {
  name: "Glauco lindao",
  type: "premium",
};

export const loginUser = (name) => {
  return {
    type: "loginUser",
    payload: {
      name,
    }
  }
}

// Use the initialState as a default value
const cartReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case 'loginUser': {
      return {
        ...state,
        name: action.payload.name,
      }
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}

export default cartReducer;