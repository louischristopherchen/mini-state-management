import React, { useContext } from 'react';
import { Stores } from './store';

function App() {
  const { state, dispatch, actions } = useContext(Stores);
  return (
    <div>
      <div>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}>
          INCREMENT
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}>
          DECREMENT
        </button> {state.count}
      </div>
      <button onClick={() => { actions.customIncrement(2) }}>
        INCREMENT CUSTOM
      </button>
    </div>
  );
}

export default App;
