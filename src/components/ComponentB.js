import React, { useContext } from "react";
import { store } from "./ComponentA";

function ComponentB() {
  const [data, setData] = useContext(store);

  return (
    <div className="App">
      <h1>Count from Component B : {data}</h1>
      <button onClick={() => setData(data + 1)}>Click Me</button>
    </div>
  );
}

export default ComponentB;
