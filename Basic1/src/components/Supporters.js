import { useState, useEffect } from "react";

const Supporters = (props) => {
  const { name, role, location } = props;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
     // console.log("timer started");
    }, 1000);
    return clearInterval(timer);
  }, []);
  return (
    <div className="profile-container">
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Location:{location}</p>
      <p>count1: {count}</p>
      <p>count2: {count2}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 - 1);
        }}
      >
        Update Count
      </button>
    </div>
  );
};

export default Supporters;
