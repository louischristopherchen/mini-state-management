import React, { createContext, useReducer, useMemo } from 'react';
import { countReducer, defaultStateCount } from './reducers/count';
import incrementAction from './actions/incrementAction';

const Stores = createContext();
const Store = ({ children }) => {
  //reducer
  const [state, dispatch] = useReducer(
    (state, action) => {
      return {
        ...countReducer(state, action)
      }
    },
    {
      ...defaultStateCount
    }
  )

  const actions = useMemo(() => ({
    ...incrementAction(dispatch)
  }), [])

  return (
    <Stores.Provider value={{ state, dispatch, actions }}>
      {children}
    </Stores.Provider>
  )
}
export { Stores, Store };