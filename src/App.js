import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar/Navbar';
import linkedin from  "../src/pictures/linkedin.png"
import github from "../src/pictures/github.png"

const Container = styled.div`
padding:0;
margin:0;
background:f8f8ff;


`

const Footer = styled(Container)`
display:flex;
flex-direction:row;
justify-content:center;
width:100vw;

background:black;
position:relative;
bottom:0;

`
const FlexRow = styled.div`
display:flex;
flex-direction:row;
align-items:center;

`

const Name = styled.div`
color:white;

`

const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:10px;
`
const SocialMediaWrapper=  styled(FlexRow)`
padding-bottom: 10px;
`
const Socialmedia = styled.div`
padding: 0px 10px;
`
function App() {
  return (
    <>
    <Container>
        <Navbar/>
    </Container>
    <Footer>
      <Wrapper>
<FlexRow>
  <SocialMediaWrapper>
  <Socialmedia>
      <button className="arrowBtn">
          <img className="rtarrow" src={linkedin} width="25px" height="25px"></img>
      </button>
      </Socialmedia>
      <Socialmedia>
      <button className="arrowBtn">
          <img className="rtarrow" src={github} width="25px" height="25px"></img>
      </button>   
   </Socialmedia> 
   </SocialMediaWrapper>
</FlexRow>
      <Name>
         Created by Akash Gopalkrishnan
      </Name>
    </Wrapper>
  </Footer>
   
  </>
  );
}

export default App;
