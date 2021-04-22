import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import database from "./firebase";
import row2 from "../pictures/row2.png"
import datapipeline from "../pictures/datapipeline.png"
import bigData from "../pictures/big-data.jpe"
import bigData2 from "../pictures/bigdata2.jpg"
import pm from "../pictures/pm.jpg"
import water from "../pictures/water.jpg"
import main from "../send";
import "./About.css"
import { Card } from '@material-ui/core';
import RowCard from './RowCard';
import PinkCard from './PinkCard';
import GreenCard from './GreenCard';
import BlueCard from './BlueCard';
import Typed from 'react-typed';

export default function About() {
/*
    const [about, setAbout] = useState([]);

useEffect(
    ()=>{
        
        database.collection("About")
        .onSnapshot(
            (snapshot)=>
            setAbout(snapshot.docs.map((doc)=>doc.data())))
        }, [about]);


{about.map((a)=>(
            <ul key={a.name}>
         <li>{a.name}</li>
         </ul>))
        }

*/
return(
 <>
<div className="title"> 
{/*<Typed strings={['Hi! My name is Akash!', 'Come get to know me!']}
       typeSpeed={20}
       backSpeed={20}
       loop
                /> */}

    <h1>Hi <span>👋</span> My name is Akash.</h1>
</div>
<div className="parent">
    {/*-------------------Row 1-------------------------------------------------*/}

<div className="child div1">
    
            <GreenCard/>
</div>
<div className="childlong div2">
    <div >
                <img className="cloud" src={row2} alt="cloud, app development"></img>
            </div>
</div>
{/*-------------------Row 2-------------------------------------------------*/}

<div className="child div3">
    <PinkCard/>
</div>
<div className="childlong div4">
<div >
                <img className="cloud" src={bigData2} alt="cloud, app development"></img>
            </div>

</div>
{/*-------------------Row 3-------------------------------------------------*/}

<div className="child div5">
    <BlueCard/>
</div>
<div className="childlong div6">
<div >
                <img className="cloud" src={pm} alt="cloud, app development"></img>
            </div>

</div>

</div>
 
 </>
 )
}
