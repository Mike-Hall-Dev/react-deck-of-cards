import react, { useState, useEffect, useRef } from "react";
import axios from "axios"
import Card from "./Card"

const BASE_URL = "http://deckofcardsapi.com/api"

function Deck() {
    const [deck, setDeck] = useState(null);
    const [drawnCard, setDrawnCard] = useState([])

    useEffect(() => {
        async function loadDeck() {
            let deck = await axios.get(`${BASE_URL}/deck/new/shuffle`);
            setDeck(deck.data)
            console.log(deck.data)
        }
        loadDeck()
    }, [setDeck])

    console.log(deck)
    async function drawCard() {
        let { deck_id } = deck;
        let drawRes = await axios.get(`${BASE_URL}/deck/${deck_id}/draw/`)
        const card = drawRes.data.cards[0];
        setDrawnCard(drawn => [...drawn,
        { id: card.code, name: card.suit + " " + card.value, image: card.image }])
    }


    const cards = drawnCard.map(card => (
        <Card key={card.id} name={card.name} image={card.image} />
    ));

    return (
        <div>
            <button onClick={drawCard}>Gimmie a card!</button>
            <>
                {cards}
            </>
        </div>
    )
}


export default Deck;