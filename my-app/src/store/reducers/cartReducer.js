const initialState = {
  products: [],
  totalPrice: 0,
}

export const addProduct = (text, price, quantity, id) => {
  return {
    type: "addProductCart",
    payload: {
      text,
      price,
      quantity,
      id,
    }
  }
}

export const removeProduct = (id) => {
  return {
    type: "removeProductCart",
    payload: {
      id,
    }
  }
}

export const clearCart = () => {
  return {
    type: "clearCart",
  }
}

// Use the initialState as a default value
const cartReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "addProductCart": {
      const newItem = {
        text: action.payload.text,
        price: action.payload.price,
        id: action.payload.id,
        quantity: action.payload.quantity}

      const products = state.products
        .find(product => product.text === action.payload.text) !== undefined ? state.products
        .map((product) => {
          if (product.text === action.payload.text) return {...product, quantity: product.quantity + action.payload.quantity}
          else return product
        }) : [...state.products, newItem];

      return {
        ...state,
        products: products,
        totalPrice: state.totalPrice + action.payload.price * action.payload.quantity,
      }
    }
    case "removeProductCart": {
      let value = 0
      return {
        ...state,
        products: state.products.filter((product) => {
          if (product.id === action.payload.id) {
            value = product.quantity * product.price;
            return false
          }
          return true
        }),
        totalPrice: state.totalPrice -= value,
      }
    }
    case "clearCart": {
      return {
        ...initialState,
      }
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesnt recognize the action type, or doesnt
      // care about this specific action, return the existing state unchanged
      return state
  }
}

export default cartReducer;