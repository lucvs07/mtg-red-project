import React from "react";
import './styles.css';


export function Card({imageUrl, cardName, cardArtist}){
    return (
        <article id="card">
            <img src={imageUrl} alt={cardName} className="card-img"/>
            <h3 className="card-title">{cardName}</h3>
            <h4 className="card-artist">{cardArtist}</h4>
        </article>

    );
}