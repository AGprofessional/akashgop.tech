import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import FooterFull from "./FooterFull.js";
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import CopyHome from './Components/Home/CopyHome';
import PG from './Components/PG';
import About from './Components/About';
import Footer from './Footer';
const Container = styled.div`
padding:0;
margin:0;
background:f8f8ff;
display:flex;
`

//Facebook app clone: https://www.youtube.com/watch?v=B-kxUMHBxNo
//react router: https://www.youtube.com/watch?v=4Ui4QkdJeQE
function App() {
  return (
    <>
    <div className="app">
    <Router>
      <div className="app-navbar">
      <Navbar/>
      </div>
      <div className="app-page">
   <Switch>
          <Route path="/ProjectGallery">
            <div className="PG">
            <PG/>
            </div>
          </Route>
          <Route path="/">
            <div className="about">
            <About/>
           {/*Called 'Home' Link */}      
</div>
           </Route>   
   </Switch>
      </div>
      <div className="app-footer">
      <Footer/>
      </div>
    </Router>
  </div>
 

       
   
 
   
  </>
  );
}

export default App;
