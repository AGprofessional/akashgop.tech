import React, {Component}from 'react'
import styled from 'styled-components'
//import LeftArrow from "./SlideShow/LeftArrow"
//import RightArrow from "./SlideShow/RightArrow"
import "../Home/SlideShow/LeftArrow.css"
import Lft from "../../pictures/leftarrow.png"
import linkedin from "../../pictures/linkedin.png"
import github from "../../pictures/github.png"

import "../Home/SlideShow/RightArrow.css"
import Rgt from "../../pictures/rightArrow.png"
import "../Home/Home.css";

//start of styled components
const LftContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:right;
border: 0px solid black;`

const RgtContainer = styled.div`
display:flex;
flex-direction:row-reverse;
justify-content:right;
border: 0px solid black;`

const HomeContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;`

const LeftSpot= styled.div`
display: flex;
flex-direction:column;
justify-content:center;
border:0px solid black;`

const RightSpot = styled(LeftSpot)`
flex-direction:column;
justify-content:center;`

const Projects = styled.div`
display:flex;
flex-direction:column;
border: 0px solid black;
color:black;
text-align:center;`

const Description = styled.div`
display:flex;
flex-direction:column;
justify-content:left;
text-align:left;
border: 0px solid black;`

const Media = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
border: 0px solid black;`

const Title= styled.h1`
margin-bottom:10px;
font-size:27px;
text-decoration:bold;
color: #1d83d4`

const Video = styled.div`
  position: relative;
  overflow: hidden;
`

const Main = styled.div`
border: 0px solid black;
margin: 0px 100px;
margin-top:-30px;
margin-bottom:30px;`
//end of styled components

const SectionTitle=styled.h1`
margin:0;
font-size:40px;

`
const Footer = styled.footer`
display:flex;
flex-direction:column;
align-items:center;
width:100vw;
height:50px;
padding:0;
margin:0;
border: 0px solid transparent;
border-box: 0;

background: black;
`

const iconContainerCol = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
border: 0px solid black;
margin-top: 25px;
`

const iconContainerRow = styled(iconContainerCol)`
flex-direction:row;
`

const projectArray=[
{id: "0", title:"HackTCNJ 2021 Winner of Google Cloud Challenge", videoLink:"https://www.youtube-nocookie.com/embed/xsMvJurmF_w?start=2", imageSrc:"", sentence1:"I received 1st place for ‘Best Use of Google Cloud API’ by identifying an opportunity to adopt Google Cloud Platform machine learning, Calendar API, and Firebase to solve a student productivity challenge caused by COVID-19.", sentence2:"Created an adaptive and responsive web and mobile application by implementing React Native, HTML5, and CSS3 for component-based UI design, asynchronous request handling and partial page updates.", sentence3:"Increased read, write, and search time complexity from potentially linear to constant time by transforming an SQL backend design to a horizontally scalable, document-based, NoSQL architecture using Google Cloud Firebase."},
{id: "1", title:"HackHERS 2021 Mentor Accomplishment", videoLink:"https://www.youtube.com/embed/7LWJBjnwi5A?start=3", imageSrc:"", sentence1:"I mentored the winning team for ‘Best Failed Attempt Hack’ by empowering students to persevere and maintain confidence by advising them to focus on user story analysis, elaboration, and presentation in order to win.", sentence2:"I also assisted students on software design for web and mobile apps by teaching them about DOM manipulation, JSON, RESTful APIs, software design planning, and making test plans and test cases for QA testing.", sentence3:"Debugged and identified algorithm design flaws by using analysis to create efficient test plans, manually performing test cases: user-case, functional, and white-box testing and by organizing version control with Git."},
{id: "2", title:"Rutgers University Senior Capstone Project: Robotic Seagull - Project Lead", videoLink:"https://www.youtube.com/embed/ISVF2acChVY?start=4", imageSrc:"", sentence1: "The project goal was to plan, create, and pitch a mechanical replica of a flying bird in a group of 5 students and within a budget of $900.", sentence2:"I was responsible for researching the model, setting milestones, and keeping within the budget.", sentence3:"The research showed that a seagull was the most cost-efficient to model. First, the mechanical parts were designed in SolidWorks and the electrical components were implemented using Raspberry Pi. Then, SolidWorks Flow Simulation was used to analyze areas of material fatigue and stress during flight. Third, we used 3D printing and a laser cutting machine to build and assemble the parts. Finally, we curated a business proposal about it's value as a toy for plane hobbyists and pitched it to a panel of judges. This year-long project gave me experience in leadership, mechanical design, project management, analysis, team work, and furthered my interest in solving problems using technology."},
{id: "3", title:"Mechanical Design Project (SolidWorks)-Project Lead", videoLink:"https://www.youtube-nocookie.com/embed/rOuEvl8O1Ls", imageSrc:"", sentence1: "The purpose of this project was to design and model 50 unique parts of a mechanical machine (Mountain Bike) using SolidWorks and in a team of five students. ", sentence2: "I was the project leader and responsible for managing the project, setting deadlines, reviewing project phases, and presenting project deliverables.", sentence3: "I managed the project using Agile/Scrum methodology."}
]

export default class Home extends React.Component{
constructor(props){
    super(props);
    this.state={
        count: 0,
    }
}

Increment = () => {
    this.setState({count: (this.state.count + 1)%4}, () => {
        console.log("increment: "+this.state.count)
    });
}

Decrement = () => {
    this.setState({count: (this.state.count + 3)%4}, () => {
        console.log("decrement: "+this.state.count)
    });
}

render() {
    return(
        <div className="page">
    <Main>
        <SectionTitle> Video Gallery </SectionTitle>
    <HomeContainer>
        <LeftSpot>
            <LftContainer>
            <button className="arrowBtn" onClick = {this.Decrement}>
                <img className="lftarrow" src={Lft} width="50px" height="50px"></img>
            </button>
            <h1>Prev</h1>
     </LftContainer>
        
        
        </LeftSpot>
        <Projects>
            <Title>
                {projectArray[this.state.count].title}
            </Title>
            <Media>
                <Video>
                    <iframe className="iframe" width="700" height="500" src={projectArray[this.state.count].videoLink} title={projectArray[this.state.count].title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Video>
            </Media>
            <Description>
                <ul>
                    <li>
                        {projectArray[this.state.count].sentence1} 
                    </li>
                    <li>
                        {projectArray[this.state.count].sentence2} 
                    </li>
                    <li>
                        {projectArray[this.state.count].sentence3} 
                    </li>
                </ul>
            </Description>
        </Projects>
        <RightSpot>
              <RgtContainer>
                 
            <button className="arrowBtn" onClick = {this.Decrement}>
                <img className="rtarrow" src={Rgt} width="50px" height="50px"></img>
            </button>
             <h1>Next</h1>
     </RgtContainer>
        </RightSpot>
    </HomeContainer>

    </Main>
   </div>
    

    )
 
}}
