import React, { useState } from "react";

const Counter = props => {
  // useState(0)[0] ~ this.state.count
  // useState(0)[0] ~ this.setState()
  const [count, setCount] = useState(0);
  // second state variable
  const [name, setName] = useState("");

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
