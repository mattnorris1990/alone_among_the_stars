import React from "react"

const CardInfo = ({card}) => {

    return (
        <>
            <img src={card.cards[0].image} height="100"/>
        </>

    )
}

export default CardInfo