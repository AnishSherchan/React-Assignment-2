import { PrimaryButton } from "../Buttons/Button";
import ComponentContainer from "../Container/ComponentContainer";
import { useState } from "react";
import PreviewContainer from "../Container/PreviewContainer";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <ComponentContainer>
      <div className="title">
        <h1>Qn 1: Build a simple counter component.</h1>
        <p>
          {" "}
          - Implement a component with a `count` state that has buttons to
          increment, decrement, and reset the counter. Pass an initial value for
          the counter as a prop.
        </p>
      </div>
      <PreviewContainer>
        <h1 className=" text-center">Counter Preview</h1>

        <div className="display_counter">
          <p className="text-center text-lg font-semibold">{count}</p>
        </div>
        <div className="count_Buttons flex gap-3 justify-center flex-wrap">
          <PrimaryButton
            title="Increase Count (+1)"
            onClick={() => setCount((prev) => prev + 1)}
          />
          <PrimaryButton
            title="Decrease Count (-1)"
            onClick={() => setCount((prev) => prev - 1)}
          />
          <PrimaryButton title="Reset Count" onClick={() => setCount(0)} />
        </div>
      </PreviewContainer>
    </ComponentContainer>
  );
};

export default Counter;
