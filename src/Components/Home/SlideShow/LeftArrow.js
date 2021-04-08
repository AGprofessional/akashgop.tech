import React from 'react'
import "./LeftArrow.css"
import styled from 'styled-components'
import Lft from "../../../pictures/leftarrow.png"


const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:right;
border: 1px solid black;`


export default function LeftArrow(props){

    return(<Container>
        <button onClick={props.Function}>
        <img className="lftarrow" src={Lft} width="30px" height="30px"></img>
        </button>
    </Container>);
}