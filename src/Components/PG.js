import { Card } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MCard2 from './MCard2';
import database from "./firebase";
import "./PG.css"

const Section = styled.section`
width:100vw;
height:100vh;
`
const WrapperDiv  = styled.div`


position:absolute;
z-index:0;
top:90px;
margin-left:45px;

`
const CenterDiv=styled.div`

`
const FlexDiv = styled.div`
display:flex;
margin:2px;
`
const H1= styled.h1`
margin:0;
padding:0;
position:relative;
top:100px;
font-size:30px;
margin:auto;
font-family:Arial;
color: cornflowerblue;
`
const CardDiv = styled.div`
border:2px solid black;
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


  

export default function PG() {
const [cards, setCards] = useState([]);

const classes = useStyles();

useEffect(
    ()=>{
        
        database.collection("Cards")
        .onSnapshot(
            (snapshot)=>
            setCards(snapshot.docs.map((doc)=>doc.data())))
        }, [cards]);


 return(
 <>
 <div className="about-parent">


{/* 
 <Section>
   <div className="title"><H1>My Projects</H1></div>
*/}

    <WrapperDiv>
      <div className="about-title">
  <h1> <span>😃</span>Browse my projects! <span>👇</span></h1>
</div>
        <CenterDiv>
       <div className={classes.root}>
      <Grid container spacing={3} direction="row" justify="space-around"  alignItems="flex-end">
        {cards.map((card)=>(<Grid item key={card.title}>
         <MCard2 title={card.title} videoGIF={card.videoGIF} image={card.image} video={card.video}date = {card.date} description={card.description} github={card.github} purpose={card.purpose} techStack={card.techStack} whatItDoes ={card.whatItDoes}></MCard2>
        </Grid>))}
      </Grid>
    </div>
    </CenterDiv>
    </WrapperDiv>
</div>
 </>
 )}

