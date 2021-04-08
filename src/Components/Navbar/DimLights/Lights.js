import React from 'react'
import styled from 'styled-components'





let text="Off";
export default class Lights extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isOn:true,
        }
    }

   LightsToggle=()=>{
     this.setState({isOn: !this.state.isOn});
        if (this.state.isOn){
           text="Off"
       }else{
           text="On"
       }
   }
    
  

render(){
    return(<div>
        
        <span>
        <button onClick={this.LightsToggle}>
            Light {text}
        </button>
        </span>
        </div>);
}}