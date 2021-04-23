import React from 'react'
import "./Footer.css"
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton, Link } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
function Footer() {
    return (
        <div className="footer">
          <p>
            <span>
              <a href="mailto:<nowiki>akash.gop3@gmail.com" target="_blank" rel="noopener noreferrer">
              <IconButton>
                < MailOutlineIcon style={{ color: "whitesmoke"}} fontSize="medium"className="footer-icon"
                />
              </IconButton>
              </a>
            </span> 
            <span>
           <a href="https://github.com/AGprofessional" target="_blank" rel="noopener noreferrer">

              <IconButton>
                <GitHubIcon style={{ color: "whitesmoke"}} fontSize="medium"className="footer-icon">
                  
                </GitHubIcon> 
              </IconButton>
              </a>
            </span>
          </p>
          <p style={{fontSize:"18px", paddingBottom:"3px"}}>Copyright &#169; {new Date().getFullYear()}      
          </p>
        </div>
    )
}

export default Footer
