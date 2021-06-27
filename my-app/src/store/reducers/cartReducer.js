const initialState = {
  products: [
    { name: "Ração para Gato", unitPrice: 25.0, id: "25313", quantity: 2 },
  ],
  totalPrice: 50,
}

export const addProduct = (name, unitPrice, quantity, id) => {
  return {
    type: "addProduct",
    payload: {
      name,
      unitPrice,
      quantity,
      id,
    }
  }
}

export const removeProduct = (name, unitPrice, quantity, id) => {
  return {
    type: "removeProduct",
    payload: {
      name,
      unitPrice,
      quantity,
      id,
    }
  }
}

// Use the initialState as a default value
const cartReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "addProduct": {
      return {
        ...state,
        products: state.products.push({
          name: action.payload.name,
          unitPrice: action.payload.unitPrice,
          id: action.payload.id,
          quantitiy: action.payload.quantity}
        ),
        totalPrice: state.totalPrice += action.payload.quantity * action.payload.unitPrice,
      }
    }
    case "removeProduct": {
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity -= action.payload.quantity,
            }
          }
          return {
            ...product,
          }
        }).filter((product) => {return product.quantity !== 0}),
        totalPrice: state.totalPrice -= action.payload.quantity * action.payload.unitPrice,
      }
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn"t recognize the action type, or doesn"t
      // care about this specific action, return the existing state unchanged
      return state
  }
}

export default cartReducer;