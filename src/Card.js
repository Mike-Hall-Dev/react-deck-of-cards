import React from "react";
import "./Card.css"

function Card({ image, name }) {
    return (
        <img className="Card"
            alt={name}
            src={image}
        />
    )
}

export default Card;