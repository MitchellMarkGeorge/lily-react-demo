import "./App.css";
import React, { useState } from "react";
import Hello from "../Hello/Hello";
function App() {
  const [name, setName] = useState<"Lily" | "Mitchell">("Lily");
  let color = "blue";
  console.log(color)


  const changeName = () => {
    color = "red";
    if (name === "Lily") {
      setName("Mitchell");
    } else {
      setName("Lily");
    }
  };
  return (
    <div>
      <Hello name={name} func={changeName} />
      <div>{name === "Lily" ? <p>Lily</p> : <p>Who is that???</p>}</div>
      <p className={name === "Lily" ? "lily" : "mitch"}>
        This is our project
      </p>
      {/* <button onClick={changeName}>Change name</button> */}
    </div>
  );
}

export default App;
