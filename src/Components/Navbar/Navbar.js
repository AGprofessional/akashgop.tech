import React, {useState} from 'react'
import styled from 'styled-components'
import About from "../About"
import PG from "../PG"
import CopyHome from "../Home/CopyHome"
import meIcon from "../../pictures/meIcon.png"
import CloseIcon from '@material-ui/icons/Close';
import "./Navbar.css"
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Lights from "./DimLights/Lights" 
import FooterFull from '../../FooterFull'


const NavContainer = styled.nav`
display:flex;
flex-direction:row;
justify-content: space-between;
width:100vw;
max-width:100%;
min-width:383px;
position:fixed;
z-index:2;
padding:0;
margin:0;
border: 1px solid green;
border-box: 0;
box-shadow: 0px 3px 30px -6px #000000;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(68,224,156,1) 0%, rgba(79,226,140,1) 31%, rgba(0,212,255,1) 100%);
background: #000080;
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
padding-right:100px;

`

const Img = styled.img`  
height:70px;
padding:0;
margin:0;
`


const SwitchContainer = styled(Container)`
background: #f8f8ff;

margin-top:75px;
margin-bottom:75px;
`


const Footer1 = styled(Container)`
display:block;
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
const Footer= styled.div`

position:relative;
bottom:0;
z-index:0;
width:100vw;
min-width:383px;
max-width:100%;
background:#000080;
margin-top:100px;

`
const Name = styled.div`
font-family: 'Poiret One', cursive;
text-align: center;  
padding: 0px;
display:inline-block;
font-size: 50px;
padding-top:15px;
color:white;
border: 0px solid black;
 @media (max-width: 1200px) {
    font-size: 40px;}
 @media (max-width: 1000px) {
    font-size: 35px;}

  @media (max-width:950px){
        font-size:30px;
    }
    @media (max-width:700px){
        font-size:25px;
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

    const [open, setOpen] = useState(false);

    const handleClick=()=>{
        setOpen(!open);
    }

    return (
        <>
         <BrowserRouter>
      
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
            <LinksContainer className="LinksContainer">
                   <LinkItem>
                       <Link to="/" className="Link"><div>Home</div></Link>
                    </LinkItem>
                    <LinkItem>
                       <Link to="/ProjectGallery" className="Link"><div>Project Gallery</div></Link>
                    </LinkItem>
                    
                     
                  
            </LinksContainer>
             <div className="hamburger">
                 
                       <IconButton onClick = {handleClick}>
                           
                           {open? <CloseIcon style={{ color: "white"}} fontSize="large"className="icon"/>: <MenuIcon style={{ color: "white"}} fontSize="large"className="icon"/>}
                        </IconButton>
            </div>
            </NavContainer> 
            {open? <LinksContainer classname="open"/>:<LinksContainer classname="close"/>}
           
           <SwitchContainer>
                 <Switch>
                   
                 
                 <Route path="/ProjectGallery">
                     <PG />
                 </Route>
                    <Route path="/other">
                     
                     <CopyHome />
                 </Route>
                  <Route path="/">
                     <About/>
                 </Route>
                 </Switch>


 
            </SwitchContainer>
  
            
            </BrowserRouter>
   
            
        </>
    )
}


const NavWindow=(props)=>{


    return(
<> <div className={props.classname}>

        
                            
                               <ul>
                                   <li><a href="localhost:3000">Home</a>
                                       
                                   </li>
                                   <li><a href="localhost:3000/ProjectGallery">Project Gallery</a>
                                       
                                   </li>
                                   </ul>
        </div>
</>
    );
}