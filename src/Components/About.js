import React from 'react'
import styled from 'styled-components'
const AboutC = styled.div`
backround-color: gray;
color:blue;


`
const FlexRowDiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
`
const FlexColDiv = styled.div`
display:flex;
flex-direction:col;
align-items:center;
justify-content:center;
`

const Wrapper  = styled.div`
height:100vh;
width:100vw;

border: 0px solid black;

`
export default function About() {
 return(
 <>
    <Wrapper>

    <h1> About Page Under Construction </h1>
    <h2> Check back soon!</h2>
    </Wrapper>


 </>



 )
}
