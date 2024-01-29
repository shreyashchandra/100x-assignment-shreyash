import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);
  // Your solution starts here
  const expensiveValue = useMemo(() => {
    let val = 1;
    for (let i = 1; i <= input; i++) {
      val = val * i;
      //   console.log("hi");
    }
    return val;
  }, [input]);

  // Your solution ends here

  return (
    <div>
      <div style={{ margin: 5 }}>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count({count})
        </button>
      </div>
      <input type="number" onChange={(e) => setInput(Number(e.target.value))} />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
