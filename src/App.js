import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar/Navbar';

import FooterFull from "./FooterFull.js";
const Container = styled.div`
padding:0;
margin:0;
background:f8f8ff;


`
const Div  =styled.div`
display:inline-block;
`
const Footer1 = styled.div`
display:inline-block;
margin:0;
padding:0;
flex-direction:row;
justify-content:center;
position:relative;
bottom:0;
z-index:2;
width:100vw;
min-width:383px;
max-width:100%;
background:#000080;
`

const Footer=styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
width:100vw;
max-width:100%;
min-width:383px;
position:fixed;
z-index:2;
padding:0;
margin-top:200px;
position:absolute;
bottom:0;
border: 1px solid green;
border-box: 0;
box-shadow: 0px 3px 30px -6px #000000;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(68,224,156,1) 0%, rgba(79,226,140,1) 31%, rgba(0,212,255,1) 100%);
background: #000080;
`

function App() {
  return (
    <>
    
    {/*<Container>*/}
        <Navbar/>
   {/*</Container>
     <Footer>
      <FooterFull/>
    </Footer>*/}
 
   
  </>
  );
}

export default App;
