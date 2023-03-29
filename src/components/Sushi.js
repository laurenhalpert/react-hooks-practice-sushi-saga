import React, {useState} from "react";

function Sushi({ sushi, money, setMoney }) {
  const [isEmpty, setIsEmpty] = useState(false);
  
  function handleEatSushi(event) {
    
    if (sushi.price > money) {
      alert ("You don't have enough money.")
    } else {
      setMoney(()=> money-sushi.price)
      setIsEmpty(!isEmpty)
    }
    
  
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEmpty ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
