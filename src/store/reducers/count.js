const defaultStateCount = {
  count: 1
}

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'CUSTOM_INCREMENT':
      return { count: state.count + action.payload }
    default: return state
  }
}

export { countReducer, defaultStateCount }