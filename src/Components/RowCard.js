import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import "./RowCard.css"

export default function RowCard(props) {

return(
    <>
<div className="text-card" id={'row'+ props.rowNum+'-'+props.CardColor+'-card'}>
                    <div className="text"  id={'row'+ props.rowNum+'-'+props.CardColor+'-text'}>
                {props.children}
                </div>
            </div> 
</>
);

}