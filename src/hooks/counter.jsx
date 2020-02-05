import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter = props => {
  // useState(0)[0] ~ this.state.count
  // useState(0)[0] ~ this.setState()
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Someone");

  useDocumentTitle(`${name} has clicked ${count} times!`);

  return (
    <React.Fragment>
      <input type="text" onChange={e => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times!
      </div>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </React.Fragment>
  );
};

export default Counter;
