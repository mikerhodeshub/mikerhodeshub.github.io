import React from 'react';
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubtIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/home.css';

function Home(){
    return(
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is Mike</h2>
                <div className="prompt">
                    <p>A Web Developer who loves to learn and create.</p>
                    <Link to={"https://www.linkedin.com/in/michael-rhodes/"} target="_blank" >
                        <LinkedInIcon />
                    </Link>
                    <Link to='javascript:void(0)'
                        onClick={() => window.location = 'mailto:michaelrhodes01@yahoo.com'}>
                        <EmailIcon />
                    </Link>
                    <Link to={"https://github.com/mikerhodeshub"} target="_blank" >
                        <GitHubtIcon />    
                    </Link>
                </div>
            </div>
            <div className="skills">
                <ol className="list">
                    <li className="item">
                        <h2>Skills</h2>
                        <span>JavaScript, React, Node.js, MongoDB, jQuery, Bootstrap, HTML, CSS, LESS, REST API Development, AJAX, JSON, Design Patterns, Responsive Web, git</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;