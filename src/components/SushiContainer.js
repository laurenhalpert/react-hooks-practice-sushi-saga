import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, count, setCount, money, setMoney }) {
  return (
    <div className="belt">
      {sushi.map(sushi=> {
        return <Sushi key={sushi.id} money={money} setMoney={setMoney} sushi={sushi}  />
      })}
      {/* Render Sushi components here! */}
      <MoreButton count={count} setCount={setCount} />
    </div>
  );
}

export default SushiContainer;
