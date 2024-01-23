import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [arr, setArr] = useState([]);

  function handle(e) {
    e.preventDefault();
    setArr([...arr, name]);
    console.log(arr.length);
  }
  return (
    <div id="main">
      <form onSubmit={handle}>
        <input
          type="text"
          name="relativeName"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ol key="relativeList">
        {arr.length > 0 &&
          arr.map((item, index) => {
            return <li key={"relativeListItem" + index}>{item}</li>;
          })}
      </ol>
    </div>
  );
};

export default App;
