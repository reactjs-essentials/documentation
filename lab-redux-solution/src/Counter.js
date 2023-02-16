import React from "react";
import "./style.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./reducers/counterSlice";

export default function Counter() {
  const state = useSelector((state) => state);
  const count = useSelector(selectCount);
  const [ammount, setAmmount] = useState(1);

  const dispatch = useDispatch();

  console.log("Redux state :" + state);

  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <div>{JSON.stringify(state)}</div>
      <div>{count}</div>

      <hr></hr>

      <input
        type="number"
        value={ammount}
        onChange={(e) => setAmmount(e.target.value)}
      ></input>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount(Number(ammount) || 0))}
      >
        Increment Ammount
      </button>

      <div>{JSON.stringify(state)}</div>
      <div>{count}</div>

      <hr></hr>
    </>
  );
}
