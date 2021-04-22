import React from 'react';
import RowCard from "./RowCard";

export default function PinkCard(){

    return(

        <>
        
         <RowCard rowNum="2" CardColor="pink"><p style={{fontFamily:"Arial"}}>Expertise in:</p>
        
            <ul>
                <li >
                    
                Web and Mobile Development
                <li>
                     Stack: ReactJS, GCP Firebase, SQL, MS Azure
                </li>
                
                </li>
                
                <li>
                Algorithm Research & Design               
                </li>
                <li>
                Software Project Management
                </li>
            
            </ul>
         
            </RowCard>
        </>
    );
}