import { http } from "../axios"

const initialState = {
  list: []
};


export const retrieveProducts = () => async (dispatch) => {
  try {
    const res = await http.get("/products")

    dispatch({
      type: "retrieveProducts",
      payload: res.data,
    });

    return Promise.resolve(res.data)
  } catch (e) {
    console.error("Error on retrieve products request: " + e);
    return Promise.reject(e)
  }
}

export const addProduct = (text, price, category, image, storage) => async (dispatch) => {
  try {
    const res = await http.post("/products", {text, price, category, storage, image})
    dispatch({
      type: "addProduct",
      payload: {
        text,
        price,
        category,
        storage,
        _id: res.data.insertedId,
      }
    })
  } catch (e) {
    console.error("Error in adding a new product: ", e)
  }
}

export const removeProduct = (id) => async (dispatch) => {
  try {

    const res = await http.post("/products/del", {id: id})

    dispatch({
      type: "removeProduct",
      payload: {
        id
      }
    })
  } catch (e) {
    console.error("Error in removing a product: ", e)
  }
}

// Use the initialState as a default value
const productsReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "retrieveProducts": {
      return {
        ...state,
        list: action.payload,
      }
    }
    case "addProduct": {
      return {
        ...state,
        list: [action.payload, ...state.list]
      }
    }
    case "removeProduct": {
      return {
        ...state,
        list: state.list.filter((product) => product._id !== action.payload.id)
      }
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn"t recognize the action type, or doesn"t
      // care about this specific action, return the existing state unchanged
      return state
  }
}

export default productsReducer;