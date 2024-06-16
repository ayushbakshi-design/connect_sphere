import React, { useState } from "react";

const InputBox = () => {
  const [inputData, setinputData] = useState("");

  function startSearch() {}

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(event) => setinputData(event.target.value)}
      />

      <button onClick={startSearch}>Search</button>
    </div>
  );
};

export default InputBox;
