import React from 'react'
import styled from 'styled-components'
import About from "../About"
import Resume from "../Resume"
import Home from "../Home/Home"
import meIcon from "../../pictures/meIcon.png"
import "./Navbar.css"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Lights from "./DimLights/Lights" 

const NavContainer = styled.nav`
display:flex;
flex-direction:row;
justify-content: space-between;
width:100vw;
padding:0;
margin:0;
border: 1px solid transparent;
border-box: 0;
box-shadow: 0px 3px 30px -6px #000000;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(68,224,156,1) 0%, rgba(79,226,140,1) 31%, rgba(0,212,255,1) 100%);
background: black;
`


const Container = styled.div`
border: 0px solid black;
text-align: center;  
padding: 0px;
display:inline-block;
`

const IconContainer = styled(Container)`
padding: 10px;
`

const LinkItem = styled(Container)`
border: 0px solid black;
text-align: center;  
padding: 0px;
display:inline-block;
padding-left: 0px;
padding-right:0px;
padding-bottom:2px;
line-height:30px;
font-size: 20px;
cursor:pointer;

`

const LinksContainer = styled(Container)`

display: flex;
flex-direction:row;
  justify-content: center;
  align-items: center;
padding-right:100px;`

const Img = styled.img`  
height:70px;
padding:0;
margin:0;
`


const SwitchContainer = styled(Container)`
background: #f8f8ff;

margin-top:70px;
`

const Name = styled.div`
font-family: 'Arizonia', cursive;
text-align: center;  
padding: 0px;
display:inline-block;
font-size: 64px;
color:white;
border: 0px solid black;
 @media (max-width: 1000px) {
    font-size: 45px;}

  @media (max-width:950px){
        font-size:40px;
    }
    @media (max-width:700px){
        font-size:35px;
    }
    
`

const ToggleContainer = styled.div`
display:flex;
flex-direction:row-reverse;
justify-content:left;
margin:10px;
`
const SectionTitle=styled.h1`
font-size:37px;
margin:0;
text-align:center;

`


export default function Navbar() {
    return (
        <>
         <BrowserRouter>
        <nav>
            <NavContainer>
            <IconContainer>
                <a href="https://akashgop.tech/">
                <Img src={meIcon}>
                </Img>   
                </a>
            </IconContainer>
          
            <Name>
                Akash Gopalkrishnan
            </Name>
            <LinksContainer>
                  
                    <LinkItem>
                       <Link to="/about" className="Link"><div>About</div></Link>
                    </LinkItem>
                    <LinkItem>
                        <Link to="/videogallery" className="Link" ><div>Video Gallery</div> </Link>
                    </LinkItem>
                      <LinkItem>
                       <Link to="/" className="Link"><div>Project Gallery</div></Link>
                    </LinkItem>
                   
            </LinksContainer>
            </NavContainer> 
            
           
           <SwitchContainer>
                 <Switch>
                   
                  <Route path="/about">
                     <About/>
                 </Route>
                 <Route path="/videogallery">
                     <Home />
                 </Route>
                    <Route path="/">
                     <Resume />
                 </Route>
                 </Switch>
            </SwitchContainer>
            </nav>
            </BrowserRouter>
     
            
        </>
    )
}


