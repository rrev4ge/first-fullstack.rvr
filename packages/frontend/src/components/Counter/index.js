import React, { useReducer } from 'react';

const initialValues = {
  value: 0,
  step: 1
}
// action ={type: ''}
// reducer(state / store, action)=> state / store

const reducer = (state, action) => {
  const { type } = action;
  const { value, step } = state;
  switch (type) {
    case 'DECREMENT': { return { ...state, value: value - step }; }
    case 'INCREMENT': { return { ...state, value: value + step }; }
    case 'CHANGE_STEP': { return { ...state, step: action.value } }
    default: { return state; }
  }

}

const Counter = () => {

  const [{ value, step }, dispatch] = useReducer(reducer, initialValues)

  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={() => { dispatch({ type: 'DECREMENT' }) }}>-</button>
        <button onClick={() => { dispatch({ type: 'INCREMENT' }) }}>+</button>
      </div>
      <input type="number" value={step} onChange={({ target: { value } }) => {
        dispatch({ type: 'CHANGE_STEP', value: Number(value) })
      }} />
    </div>
  );
}

export default Counter;
