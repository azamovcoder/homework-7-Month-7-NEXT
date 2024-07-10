"use client";

import "./Counter.scss";

import { decrement, increment } from "@/lib/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <div className="counter">
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button disabled={count === 0} onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
