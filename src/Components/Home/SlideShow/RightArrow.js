import React from 'react'
import "./RightArrow.css"
import styled from 'styled-components'
import Rgt from "../../../pictures/rightArrow.png"

const Container = styled.div`
display:flex;
flex-direction:row-reverse;
justify-content:right;
border: 1px solid black;


`
export default function RightArrow(){

    return(<Container>
       
        <img className="rtarrow" src={Rgt} width="30px" height="30px"></img>

    </Container>);
}