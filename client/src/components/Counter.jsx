import { useReducer, useState } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    case "INCREMENT_BY_COUNT":
      return state + action.payload;
    default:
      return state;
  }
};

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(countReducer, 0);

  const onIncrement = () => {
    // setCount((state) => current + 1);
    // Performing an action by providing an object to dispatch
    // Every action has a type
    // Type is used distinguish what type of action is performed
    dispatch({
      type: "INCREMENT",
    });
  };
  const onDecrement = () => {
    // setCount((prev) => prev - 1);
    dispatch({
      type: "DECREMENT",
    });
  };
  const onReset = () => {
    // setCount(0);
    dispatch({
      type: "RESET",
    });
  };
  const incrementByCount = () => {
    // setCount((prev) => prev + prev);
    // dispatch(action)
    dispatch({
      type: "INCREMENT_BY_COUNT",
      payload: count,
    });
  };

  return (
    <div>
      Count: {count}
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
        <button onClick={incrementByCount}>Increment By Count</button>
      </div>
    </div>
  );
};

export default Counter;
