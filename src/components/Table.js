import React from "react";

function Table({ plates = [], money, setMoney }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));
  function handleAddMoney() {
    setMoney(()=> money + 10)
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <button onClick={handleAddMoney}>Add $10 to My Sushi Budget</button>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
