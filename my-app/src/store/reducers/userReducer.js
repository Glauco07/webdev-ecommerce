import { http } from "../axios"

const initialState = {
  name: "",
  user: "",
  admin: false,
  _id: "",
  city: "",
  email: "",
};

export const loginUser = (user, password) => async (dispatch) => {
  try {
    const res = await http.post("/login", {user: user, password: password});

    if (res.data !== 'Login Failed') {
      dispatch({
        type: "loginUser",
        payload: {
          user,
          name: res.data.name,
          _id: res.data._id,
          city: res.data.city,
          email: res.data.email,
          admin: res.data.admin
        }
      });
    }
  } catch (e) {
    console.error('Erro logging user: ', e)
  }
}

export const addUser = (user, name, city, email, password) => async (dispatch) => {
  try {
    const res = await http.post("/users", {user, name, city, email, admin: false, password})

    dispatch({
      type: "loginUser",
      payload: {
        user,
        name,
        city,
        email,
        admin: false,
        _id: res.data.insertedId
      }
    })
  } catch (e) {
    console.error("Error adding a new user: ", e)
  }
}

export const addAdmin = (user) => async (dispatch) => {
  try {
    const res = await http.post("/users/addadmin", {user})
    const username = JSON.parse(res.config.data).user

    dispatch({
      type: "addAdmin",
      payload: {
        user
      }
    })

    if (res.status === 200) {
      window.alert(`Usuário ${username} se tornou admin`)
    } else {
      window.alert("Usuário não existe")
    }
  } catch (e) {
    window.alert("Falha ao adicionar admin")
    console.error("Error adding a new admin: ", e)
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