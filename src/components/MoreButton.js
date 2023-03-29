import React from "react";

function MoreButton({ count, setCount }) {
  function handleMoreSushi() {
    setCount(()=> count+1)
  }
  return <button onClick={handleMoreSushi}>More sushi!</button>;
}

export default MoreButton;
