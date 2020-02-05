import React, { useState, useEffect } from "react";

const Counter = props => {
  // useState(0)[0] ~ this.state.count
  // useState(0)[0] ~ this.setState()
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Someone");

  useEffect(() => {
    // function is called every time the component is rendered
    document.title = `${name} has clicked ${count} times!`;
    return () => {
      console.log("clean up");
    };
  });
  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

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
