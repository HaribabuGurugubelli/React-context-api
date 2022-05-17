import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const store = createContext();

function ComponentA() {
  const [data, setData] = useState(0);

  return (
    <div className="App">
      <h1>Cont from Component A : {data}</h1>
      <button onClick={() => setData(data + 1)}>Click Me</button>
      <section>
        <store.Provider value={[data, setData]}>
          <ComponentB />
        </store.Provider>
      </section>
    </div>
  );
}

export default ComponentA;
