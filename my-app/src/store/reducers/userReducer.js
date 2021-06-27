const initialState = {
  name: "",
  user: "",
  type: "",
  id: "",
  city: "",
  email: "",
};

export const loginUser = (user, password) => {
  return {
    type: "loginUser",
    payload: {
      user,
      name: "Pessoa Maravilhosa",
      id: "651132135",
      city: "São Carlos",
      email: "userperfeito@gmail.com",
      type: "premium"
    }
  }
}

export const signoutUser = () => {
  return {
    type: "signoutUser",
  }
}

// Use the initialState as a default value
const userReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "loginUser": {
      return {
        ...state,
        ...action.payload,
      }
    }
    case "signoutUser": {
      return {
        ...initialState,
      }
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn"t recognize the action type, or doesn"t
      // care about this specific action, return the existing state unchanged
      return state
  }
}

export default userReducer;