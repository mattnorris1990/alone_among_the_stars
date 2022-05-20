import React from "react"
import styled from "styled-components"

const CardInfo = ({card}) => {

    const CardOverlay = styled.div`
        background: rgb(217,111,210);
        background: linear-gradient(0deg, rgba(217,111,210,1) 0%, rgba(112,66,178,1) 51%, rgba(37,44,131,1) 100%);
        overflow: hidden;
        border: 3px solid #7eddca;
        border-radius: 10px;
    `

    const Card = styled.img`
        opacity: 0.4;
        filter: grayscale(50%) brightness(200%);
    `

    return (
        <>  
            <CardOverlay>
                <Card src={card.cards[0].image} height="100"/>
            </CardOverlay>
        </>

    )
}

export default CardInfo