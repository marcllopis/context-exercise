import React, { useState } from "react";
import Main from "./components/Main";
import "./App.css";

function App() {
  let [age, setAge] = useState(20);
  let [name] = useState("Marc");

  const getOld = () => setAge(age + 1);

  return (
    <div className="App">
      <h1>Hey from App.js</h1>
      <p>
        In App.js we are not doing anything special, just defining the state and
        rendering a child component that is Main. Main receives props
      </p>
      <hr />
      <Main age={age} name={name} getOld={getOld} />
    </div>
  );
}

export default App;
