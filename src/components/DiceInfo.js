import React from "react"
import styled from "styled-components"

const DiceInfo = ({number}) => {

    const Dice = styled.div`
        width: 100px;
        height: width;
        text-align: center;
        border: 2px solid black;
        border-radius: 20px;
        padding-top: 4.5%;
        font-size: 300%  ; 
    `

    return (
        <Dice>
            {number}
        </Dice>
    )
}

export default DiceInfo