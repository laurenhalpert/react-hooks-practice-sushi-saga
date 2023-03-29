/*
App (sushi, money, isEmpty, count)
|_SushiContainer (sushi, cb to get more sushi, money)
    |_Sushi (sushi, isEmpty, money)
    |_MoreButton (sushi, cb to get more sushi)
|_Table (isEmpty, money)



*/
import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [count, setCount] = useState(1)
  const [money, setMoney] = useState(100)
  
  useEffect(()=> {
    fetch(API)
    .then(r=>r.json())
    .then(sushiItems => setSushi(sushiItems.slice(((count*4)-4),(count*4)))
  )});
  function handleEmptyPlate (name) {
    console.log(name)
  }
  return (
    <div className="app">
      <SushiContainer money={money} setMoney={setMoney} onEmpty={handleEmptyPlate} sushi={sushi} count={count} setCount={setCount}/>
      <Table money={money} setMoney={setMoney}/>
    </div>
  );
}

export default App;
