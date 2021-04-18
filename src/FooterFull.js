 import React from 'react'
 import styled from 'styled-components'
import linkedin from  "../src/pictures/linkedin.png"
import github from "../src/pictures/github.png"


 const FlexRow = styled.div`
display:flex;
flex-direction:row;
align-items:center;

`

const Name = styled.div`
color:white;

`

const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:10px;

`
const SocialMediaWrapper=styled(FlexRow)`
padding-bottom: 10px;
`
const Socialmedia = styled.div`
padding: 0px 10px;`

 function FooterFull() {
     return (
         
             <Wrapper>

<FlexRow>
  <SocialMediaWrapper>
  {/*<Socialmedia>
      <label type="button" className="arrowBtn">
          <img className="rtarrow" src={linkedin} width="25px" height="25px"></img>
      </label>
      </Socialmedia>
  */}
      <Socialmedia>
      <label type="button" className="arrowBtn">
          <img className="rtarrow" src={github} width="25px" height="25px"></img>
      </label>   
   </Socialmedia> 
   </SocialMediaWrapper>
</FlexRow>
      <Name>
         Created by Akash Gopalkrishnan
      </Name>
    </Wrapper>
        
     )
 }
 
 export default FooterFull
 
 
 
 
 