import React from 'react';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className='socialMedia'>
                <Link to={"https://www.linkedin.com/in/michael-rhodes/"} target="_blank" >
                    <LinkedInIcon />
                </Link>
                <Link to={"https://github.com/mikerhodeshub"} target="_blank" >
                    <GitHubIcon />    
                </Link>
            </div>
            <p>&copy; 2023 mikerhodes.com</p>
        </div>
    ) 
}

export default Footer;