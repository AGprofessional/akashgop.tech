import React from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Toggle from './Components/Toggle';

const Container = styled.div`
padding:0;
margin:0;

`

function App() {
  return (
    <Container>
        <Navbar/>
        <Toggle/>
    </Container>
  
  );
}

export default App;
