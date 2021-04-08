import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar/Navbar';

const Container = styled.div`
padding:0;
margin:0;
background:f8f8ff;


`

function App() {
  return (
    <Container>
        <Navbar/>
     
    </Container>
  
  );
}

export default App;
