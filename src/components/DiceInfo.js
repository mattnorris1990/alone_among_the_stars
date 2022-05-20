import React from "react"
import styled from "styled-components"

const DiceInfo = ({number}) => {

    const Dice = styled.div`
        width: 100px;
        height: width;
        text-align: center;
        border: 3px solid #7eddca;
        border-radius: 20px;
        padding-top: 4.5%;
        font-size: 300%  ; 
        background: rgb(217,111,210);
        background: linear-gradient(0deg, rgba(217,111,210,1) 0%, rgba(112,66,178,1) 51%, rgba(37,44,131,1) 100%);
    `

    return (
        <Dice>
            {number}
        </Dice>
    )
}

export default DiceInfo