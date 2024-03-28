import React from "react";
import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours"
const App = () => {
  const [tours,setTours]=useState(data);
  function removeTours(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }
  function Reload(){
    setTours(data)
  }
  if(tours.length===0){
    return (
      <div className="Refresh">
        <h2>No tours Left</h2>
        <button className="btn-white" onClick={Reload}>Refresh</button>
      </div>
    )
  }
  return <div className="App">
      <Tours tours={tours} removeTours={removeTours}></Tours>
    </div>;
};

export default App;
