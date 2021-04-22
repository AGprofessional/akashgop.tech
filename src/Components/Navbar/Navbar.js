import React, {useState} from 'react'
import styled from 'styled-components'
import About from "../About"
import PG from "../PG"
import CopyHome from "../Home/CopyHome"
import meIcon from "../../pictures/meIcon.png"
import CloseIcon from '@material-ui/icons/Close';
import "./Navbar.css"
import {
BrowserRouter as Router,
  Link, Switch, Route
} from "react-router-dom";
import {IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Lights from "./DimLights/Lights" 
import FooterFull from '../../FooterFull'


const Container = styled.div`
border: 0px solid black;
text-align: center;  
padding: 0px;
display:inline-block;
`

const IconContainer = styled(Container)`
padding: 10px;
flex:1;
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
color:black;


`

const LinksContainer = styled(Container)`
flex:1;

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





const Name = styled.div`
font-family: 'Poiret One', cursive;
text-align: center;  
padding: 0px;
display:flex;
align-items:center;
font-size: 50px;
font-weight:600;
color:whitesmoke;
border: 2px solid black;
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
    flex:1;

`




export default function Navbar() {

    const [open, setOpen] = useState(false);

    const handleClick=()=>{
        setOpen(!open);
    }

    return (
        <>
        <Router>
       <nav className="navbar"> 
            <div className="navbar-left">
                <div className="avatar">
                    <Img src={meIcon}></Img>   
                </div>
            
                <Name>
                    AG
                </Name>
            </div>
            <div className="navbar-right">
                <div className={`Links  ${open?"Links-hamburger":""}`}>
                    
                        
                        <div className="EachLinkBox">
                            
                            <Link to="/" className={`Link1  ${open?"Link1-hamburger":""}`}><div>Home</div></Link>
                        </div>
                        <div className="EachLinkBox">
                            
                            <Link to="/ProjectGallery" className={`Link1  ${open?"Link1-hamburger":""}`}><div>Project Gallery</div></Link>
                        
                        </div>
                       
                    

                </div>
            
            <div className="hamburger"> 
                <IconButton onClick = {handleClick}>               
                    {open? <CloseIcon style={{ color: "whitesmoke"}} fontSize="large"className="icon"/>: <MenuIcon style={{ color: "whitesmoke"}} fontSize="large"className="icon"/>}
                </IconButton>
            </div>
           {/*{open? <LinksContainer classname="open"/>:<LinksContainer classname="close"/>} */}
            
           </div>

           </nav>
                                              </Router>


          
   
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