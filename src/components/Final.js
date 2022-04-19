import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";

const Final = () => {
  const context = useContext(MyContext);

  return (
    <>
      <h2>This is Final.js</h2>
      <p>
        This is the final component, this guy receives props all the way from
        App.js
      </p>
      <h4>The name is: {context.name}</h4>
      <p>The age value is: {context.age}</p>
      <button onClick={context.getOld}>Get older!</button>
    </>
  );
};

export default Final;
