import React from "react";
import "./CardChoice.css";


const CardChoice = props => (
  <div onClick={() => props.shuffleCards(props.id)}  className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CardChoice;
