import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import database from "./firebase";
import stock from "../pictures/stock.jpg"
import water from "../pictures/water.jpg"
import main from "../send";
import "./About.css"

const FlexRowDiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;`


const FlexColDiv = styled.div`
display:flex;
flex-direction:col;
align-items:center;
justify-content:center;`



const WrapperDiv = styled.div`
display:flex;
width:100vw;

`

const Div1 = styled.div`
width:200px;
margin:50px;
border:1px solid black;
`

const Div2 = styled.div`

margin:50px;
width:650px;
border:1px solid black;
text-align:left;
`

const Wdiv=styled.div`
display:flex;
flex-direction:column;
`
const Section  = styled.section`
border:1px solid black;
margin: 30px;
`


export default function About() {
const [about, setAbout] = useState([]);

useEffect(
    ()=>{
        
        database.collection("About")
        .onSnapshot(
            (snapshot)=>
            setAbout(snapshot.docs.map((doc)=>doc.data())))
        }, [about]);

/*
{about.map((a)=>(
            <ul key={a.name}>
         <li>{a.name}</li>
         </ul>))
        }

*/
return(
 <>
 {/*<button className="button" onClick={main}>Azure</button>*/}
 <div className="wrapper">
    <div className="allRows">
        <div className="row">
            <div className="text">
            <p>Favorite things to do:</p>
            
            <ul>
                <li>
                Practice for coding competitions
                </li>
                <li>
                
                Develop  web and mobile software apps
                </li>
                <li>
                
                Play tennis

                </li>
            </ul>
            </div>
        
           <div className="image">
                <div className="imageContainer">
                <div className="image1">
<img height="100%" width="100%"src={stock}></img>
                </div>
                 <div className="image1">
<img height="100%" width="100%"src={water}></img>

                </div>
                 <div className="image1">
image
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="image">
                <div className="imageContainer">
                <div className="image1">
image
                </div>
                 <div className="image1">
image
                </div>
                 <div className="image1">
image
                </div>
                </div>
            </div>
            <div className="text">
            <p>Career Interests:</p>
            
            <ul>
                <li>
                Software Engineer/Developer
                </li>
                <li>
                
                Cloud Computing
                </li>
                <li>
                
                Algorithm Design/Research

                </li>
            </ul>
            </div>
        
            
        </div>        
    </div>
</div>

 </>
 )
}
