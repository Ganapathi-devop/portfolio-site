import { useState } from "react";

function Txt() {
  const [role, setRole] = useState([
    <h1>React Developer</h1>,
    <h1>Software Engineer</h1>,
    <h1>Java Developer</h1>,
  ]);
  const [count, setCount] = useState(true);
  setInterval(() => {
    count ? setCount(false) : setCount(true);
    console.log("y");
  }, 2999);
  return (
    <div className="typewriter">{role[Math.floor(Math.random() * 2)]}</div>
  );
}

export default Txt;
