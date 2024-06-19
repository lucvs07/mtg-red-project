import React, { useEffect, useState } from "react";
import './styles.css';
import { Card } from "../Card/Card";

export function CardList(){
    const [cartas, setCartas] = useState([]);

    useEffect(() => {
        fetch('https://api.magicthegathering.io/v1/cards?colors=R')
            .then(response => response.json())
            .then(data => {
                if (data){
                    setCartas(data.cards);
                }
            })
    }, []);
    console.log(cartas[1])
    return (
        <>
            <section id="card-list">
                {cartas.map(carta => (
                    carta.imageUrl ?
                    <Card
                        key={carta.multiverseid}
                        imageUrl={carta.imageUrl}
                        cardName={carta.name}
                        cardArtist={carta.artist}
                    /> : <></>
                ))}
            </section>
        </>
    );
};