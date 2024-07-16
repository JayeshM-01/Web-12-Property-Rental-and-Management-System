import React from "react";
import './propertycard.css'
import { useNavigate } from "react-router-dom";
import {truncate} from 'lodash'
import Heart from "../like/Heart";
const Propertycard = ({card}) => {
  const navigate = useNavigate();
    return(
        <div className="flexColStart r-card"
        onClick={()=>navigate(`../properties/${card.id}`)}
        >
            <Heart id={card?.id}/>
        <img src={card.image} alt="home" />
         
        <span className="secondaryText r-price">
          <span style={{ color: "orange" }}>$</span>
          <span>{card.price}</span>
        </span>
        <span className="primaryText">{truncate(card.title , {length:15})}</span>
        <span className="secondaryText">{truncate(card.description, {length: 80})}</span>
      </div>
    )
}

export default Propertycard